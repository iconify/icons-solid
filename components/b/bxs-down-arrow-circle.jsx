import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkk2jqbph.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nkk2jqbph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-down-arrow-circle"} {...others} />);
}

export default Component;
