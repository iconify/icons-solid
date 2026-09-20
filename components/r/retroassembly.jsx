import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wx7mr1bdl.css';
import '../../css/k/kdu6--gsl.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="wx7mr1bdl"/><path class="kdu6--gsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:retroassembly"} {...others} />);
}

export default Component;
