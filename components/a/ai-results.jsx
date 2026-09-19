import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc_52le5u.css';
import '../../css/r/rw3u8dcyu.css';
import '../../css/s/s3bjnib6t.css';
import '../../css/h/hoim5td5r.css';
import '../../css/k/kfmmtbbnn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gc_52le5u"/><path class="rw3u8dcyu"/><path class="s3bjnib6t"/><path class="hoim5td5r"/><path class="kfmmtbbnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ai-results"} {...others} />);
}

export default Component;
