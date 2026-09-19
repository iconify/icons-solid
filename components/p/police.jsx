import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9zji5v_l.css';
import '../../css/s/s8s9ys03v.css';
import '../../css/s/sf_in2t8v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c9zji5v_l"/><path class="s8s9ys03v"/><path class="sf_in2t8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:police"} {...others} />);
}

export default Component;
