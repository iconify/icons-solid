import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwotdib6l.css';
import '../../css/b/bhhw35bml.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nwotdib6l"/><rect class="bhhw35bml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:compute"} {...others} />);
}

export default Component;
