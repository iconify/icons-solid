import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlb8v_b5v.css';
import '../../css/p/pcir-8toc.css';
import '../../css/l/lbh3hgb-e.css';
import '../../css/t/tb3wj67dv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nlb8v_b5v"/><path class="pcir-8toc"/><path class="lbh3hgb-e"/><path class="tb3wj67dv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:transportation-vintage-train"} {...others} />);
}

export default Component;
