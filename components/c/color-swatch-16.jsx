import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ab9e4v7oo.css';
import '../../css/w/wvyfc4bjj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ab9e4v7oo"/><path clip-rule="evenodd" class="wvyfc4bjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:color-swatch-16"} {...others} />);
}

export default Component;
