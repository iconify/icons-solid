import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mawmz3o9s.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="mawmz3o9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:localisation"} {...others} />);
}

export default Component;
