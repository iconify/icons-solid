import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/viy1tfbqb.css';
import '../../css/g/gge4koq5d.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="viy1tfbqb"/><path class="gge4koq5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:testrail-wordmark"} {...others} />);
}

export default Component;
