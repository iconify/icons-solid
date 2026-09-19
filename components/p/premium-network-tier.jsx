import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo8ap71oo.css';
import '../../css/o/ooj3jip1b.css';
import '../../css/f/fhqdiozkx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jo8ap71oo"/><circle class="ooj3jip1b"/><circle class="fhqdiozkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:premium-network-tier"} {...others} />);
}

export default Component;
