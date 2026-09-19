import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqiu7z17j.css';
import '../../css/b/bj4qidbex.css';
import '../../css/y/yfd9ljbcs.css';
import '../../css/h/h127emb3b.css';
import '../../css/l/l7worlosa.css';
import '../../css/o/oz0srxb4e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sqiu7z17j"/><path class="bj4qidbex"/><path class="yfd9ljbcs"/><path class="h127emb3b"/><path class="l7worlosa"/><path class="oz0srxb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:edge-enhancement-02"} {...others} />);
}

export default Component;
