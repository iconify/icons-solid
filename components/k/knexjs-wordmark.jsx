import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kunthyb0f.css';
import '../../css/b/bzghj2btg.css';
import '../../css/d/dph_j-9vm.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="kunthyb0f"/><path class="bzghj2btg"/><path class="dph_j-9vm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:knexjs-wordmark"} {...others} />);
}

export default Component;
