import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/y/yan8t0ban.css';
import '../../css/e/eapj0l7sp.css';
import '../../css/f/frlrrxaqn.css';
import '../../css/h/howwg-b9w.css';
import '../../css/p/pfr_qr32m.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="n1mjunbsu"><path class="yan8t0ban"/><path class="eapj0l7sp"/></g><path class="frlrrxaqn"/><path class="howwg-b9w"/><path class="pfr_qr32m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:chequered-flag"} {...others} />);
}

export default Component;
