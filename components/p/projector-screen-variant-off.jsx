import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4xme0bdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4xme0bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:projector-screen-variant-off"} {...others} />);
}

export default Component;
