import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfo1k5b-e.css';
import '../../css/u/u0q_e1bqq.css';

const viewBox = {"width":16,"height":14};
const content = `<path class="sfo1k5b-e"/><path class="u0q_e1bqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:email"} {...others} />);
}

export default Component;
