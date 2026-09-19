import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv8it5a_b.css';
import '../../css/g/g82lygpra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jv8it5a_b"/><path class="g82lygpra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-up-left-stroke-circle-filled"} {...others} />);
}

export default Component;
