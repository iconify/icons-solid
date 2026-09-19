import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht8b8sbjq.css';
import '../../css/f/fr1_bz0hn.css';
import '../../css/o/ocqv0hbcj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ht8b8sbjq"/><path class="fr1_bz0hn"/><path class="ocqv0hbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-print"} {...others} />);
}

export default Component;
