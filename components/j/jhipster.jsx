import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7s9r1-qf.css';
import '../../css/g/gfjofphzq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="p7s9r1-qf"/><path class="gfjofphzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:jhipster"} {...others} />);
}

export default Component;
