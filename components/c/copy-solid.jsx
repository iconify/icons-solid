import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxjzbbbhp.css';
import '../../css/y/yqgg-lbet.css';
import '../../css/z/z687dobnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zxjzbbbhp"/><path class="yqgg-lbet"/><path class="z687dobnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:copy-solid"} {...others} />);
}

export default Component;
