import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk5b0uhxo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gk5b0uhxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:card-and-dice"} {...others} />);
}

export default Component;
