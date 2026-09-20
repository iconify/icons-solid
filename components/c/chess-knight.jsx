import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mw1d0pbtt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mw1d0pbtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:chess-knight"} {...others} />);
}

export default Component;
