import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r10eajbbi.css';
import '../../css/z/z0mykrllt.css';
import '../../css/f/f6u8w3b2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="r10eajbbi"/><path class="z0mykrllt"/><rect class="f6u8w3b2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:trophy-circle"} {...others} />);
}

export default Component;
