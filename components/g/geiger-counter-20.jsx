import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u77uhwbbx.css';
import '../../css/h/hlusmqb_s.css';
import '../../css/f/frrn73b_p.css';
import '../../css/n/na-8m7bnw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u77uhwbbx"/><path class="hlusmqb_s"/><path class="frrn73b_p"/><path class="na-8m7bnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geiger-counter-20"} {...others} />);
}

export default Component;
