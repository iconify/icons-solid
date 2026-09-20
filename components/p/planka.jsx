import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm2otvbdc.css';
import '../../css/i/icw3oacuy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rm2otvbdc"/><path class="icw3oacuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planka"} {...others} />);
}

export default Component;
