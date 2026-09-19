import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj9htxb2j.css';
import '../../css/q/qjl0smrdw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fj9htxb2j"/><path class="qjl0smrdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-grid"} {...others} />);
}

export default Component;
