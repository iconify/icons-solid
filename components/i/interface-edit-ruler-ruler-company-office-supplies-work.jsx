import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7w6vhb0a.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="n7w6vhb0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-ruler-ruler-company-office-supplies-work"} {...others} />);
}

export default Component;
