import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpkx02bvu.css';
import '../../css/e/etynb-byp.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="qpkx02bvu"/><path class="etynb-byp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linkding"} {...others} />);
}

export default Component;
