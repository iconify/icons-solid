import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm6odxb_u.css';
import '../../css/r/rivw31b0j.css';
import '../../css/u/u4hlkiabp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lm6odxb_u"/><path class="rivw31b0j"/><path class="u4hlkiabp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:night-landscape"} {...others} />);
}

export default Component;
