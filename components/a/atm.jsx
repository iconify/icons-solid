import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-mdp1bav.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="l-mdp1bav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:atm"} {...others} />);
}

export default Component;
