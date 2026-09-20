import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt-fvkbaw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qt-fvkbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sobbing-face-in-circle"} {...others} />);
}

export default Component;
