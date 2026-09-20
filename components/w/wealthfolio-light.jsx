import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnb8f3bva.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jnb8f3bva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wealthfolio-light"} {...others} />);
}

export default Component;
