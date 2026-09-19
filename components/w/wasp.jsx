import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7ifnpa_v.css';
import '../../css/c/cqaf674jx.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="f7ifnpa_v"/><path class="cqaf674jx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:wasp"} {...others} />);
}

export default Component;
