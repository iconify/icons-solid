import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/easitdb1p.css';
import '../../css/l/lndkxrb9v.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="easitdb1p"/><path class="lndkxrb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:opensuse-wordmark"} {...others} />);
}

export default Component;
