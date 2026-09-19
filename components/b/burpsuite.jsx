import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g37freb4x.css';
import '../../css/c/ck8n3ib1j.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="g37freb4x"/><path class="ck8n3ib1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:burpsuite"} {...others} />);
}

export default Component;
