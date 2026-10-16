import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0ufn5uvh.css';
import '../../css/v/vzgpo4bbf.css';
import '../../css/f/fkhpo-beq.css';
import '../../css/h/h6-77x89f.css';
import '../../css/j/jplqt0prm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l0ufn5uvh"/><path class="vzgpo4bbf"/><path class="fkhpo-beq"/><path class="h6-77x89f"/><path class="jplqt0prm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:graphite-48-bold"} {...others} />);
}

export default Component;
