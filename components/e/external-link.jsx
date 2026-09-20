import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzwy0zbjv.css';
import '../../css/j/j7gs3mbhr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzwy0zbjv"/><path class="j7gs3mbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:external-link"} {...others} />);
}

export default Component;
