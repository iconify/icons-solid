import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_cut2bia.css';
import '../../css/v/vyoe27bvu.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="o_cut2bia"/><path class="vyoe27bvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:north-pole-security"} {...others} />);
}

export default Component;
