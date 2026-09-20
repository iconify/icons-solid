import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyv0qi4vm.css';
import '../../css/r/r62u3xcnh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pyv0qi4vm"/><path class="r62u3xcnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gauge-low-16"} {...others} />);
}

export default Component;
