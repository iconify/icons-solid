import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcoxt7ego.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jcoxt7ego"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:app-window-x"} {...others} />);
}

export default Component;
