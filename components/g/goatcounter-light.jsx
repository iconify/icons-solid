import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3tfe5b7m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z3tfe5b7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:goatcounter-light"} {...others} />);
}

export default Component;
