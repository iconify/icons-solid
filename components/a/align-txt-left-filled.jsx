import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj4f5jigr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="gj4f5jigr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:align-txt-left-filled"} {...others} />);
}

export default Component;
