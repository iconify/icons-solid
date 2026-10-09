import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvtb9mbah.css';
import '../../css/n/ndrbb8byy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cvtb9mbah"/><path class="ndrbb8byy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dollar-48"} {...others} />);
}

export default Component;
