import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_eg9t9sm.css';
import '../../css/m/mw3jqjowb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r_eg9t9sm"/><path class="mw3jqjowb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grimoire-ttrpg"} {...others} />);
}

export default Component;
