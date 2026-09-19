import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m27p55t_c.css';
import '../../css/g/gqu4bebvs.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="m27p55t_c"/><path class="gqu4bebvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nasm"} {...others} />);
}

export default Component;
