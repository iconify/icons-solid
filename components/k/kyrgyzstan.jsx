import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex9s0kk5d.css';
import '../../css/p/pvjrmx88k.css';
import '../../css/l/l7w7mb29j.css';
import '../../css/f/f9ihxbcgl.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ex9s0kk5d"/><path class="pvjrmx88k"/><path class="l7w7mb29j"/><path class="f9ihxbcgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:kyrgyzstan"} {...others} />);
}

export default Component;
