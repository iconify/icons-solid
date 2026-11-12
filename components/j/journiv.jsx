import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/feh17ircu.css';
import '../../css/v/v6phkq3ir.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="feh17ircu"/><path class="v6phkq3ir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:journiv"} {...others} />);
}

export default Component;
