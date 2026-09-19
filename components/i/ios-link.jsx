import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q83hv0ath.css';
import '../../css/c/cj7oqvbrl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q83hv0ath"/><path class="cj7oqvbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-link"} {...others} />);
}

export default Component;
