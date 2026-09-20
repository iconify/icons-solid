import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bporwpv9i.css';
import '../../css/u/ujw8tpbuy.css';
import '../../css/c/cbby56vwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bporwpv9i"/><path class="ujw8tpbuy"/><path class="cbby56vwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:clipboard-paste"} {...others} />);
}

export default Component;
