import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1t0v7bjb.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="h1t0v7bjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-arrows-down-right-circle"} {...others} />);
}

export default Component;
