import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emdf2hbre.css';
import '../../css/o/o28scob-h.css';
import '../../css/d/dyiul4bgp.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="emdf2hbre"/><path class="o28scob-h"/><path class="dyiul4bgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:usdc"} {...others} />);
}

export default Component;
