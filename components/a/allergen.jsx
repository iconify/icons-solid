import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnk5g35xy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jnk5g35xy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:allergen"} {...others} />);
}

export default Component;
