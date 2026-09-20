import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/o/ockota.css';
import '../../css/k/kj2bfh.css';
import '../../css/s/so-from-28.css';
import '../../css/d/d-7xq8qc.css';
import '../../css/d/d-7h3jep.css';
import '../../css/f/fade-qhlvwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c ockota"/><path class="a0m25c kj2bfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:hazard-lights-loop"} {...others} />);
}

export default Component;
