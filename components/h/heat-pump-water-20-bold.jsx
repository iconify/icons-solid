import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs_q2h7oe.css';
import '../../css/p/pk1wthwad.css';
import '../../css/b/broi4tbbu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xs_q2h7oe"/><path class="pk1wthwad"/><path class="broi4tbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-water-20-bold"} {...others} />);
}

export default Component;
