import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfvnjqbra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfvnjqbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-arrow-left-gloss"} {...others} />);
}

export default Component;
