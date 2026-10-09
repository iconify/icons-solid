import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/j/jh9opkozm.css';
import '../../css/y/yr5x9tnbi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="jh9opkozm"/><path class="yr5x9tnbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contrast-48"} {...others} />);
}

export default Component;
