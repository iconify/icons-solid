import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdb19jl6q.css';
import '../../css/q/q037hgbfp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pdb19jl6q"/><path class="q037hgbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:used-cooking-oil-20"} {...others} />);
}

export default Component;
