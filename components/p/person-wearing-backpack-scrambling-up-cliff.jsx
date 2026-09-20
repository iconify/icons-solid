import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lejn1miiq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lejn1miiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-wearing-backpack-scrambling-up-cliff"} {...others} />);
}

export default Component;
