import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tum2ujb2a.css';
import '../../css/t/tets5tbsv.css';
import '../../css/d/dmkkcgbra.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tum2ujb2a"/><path class="tets5tbsv"/><path class="dmkkcgbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:jhipster-wordmark"} {...others} />);
}

export default Component;
