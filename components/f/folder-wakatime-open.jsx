import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxf38ybrm.css';
import '../../css/q/qrlb8jbjn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yxf38ybrm"/><path class="qrlb8jbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-wakatime-open"} {...others} />);
}

export default Component;
