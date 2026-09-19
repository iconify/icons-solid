import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6ndv5-vm.css';
import '../../css/f/fiwf45bml.css';

const viewBox = {"width":12,"height":12};
const content = `<rect class="p6ndv5-vm"/><path class="fiwf45bml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:table-fill-12"} {...others} />);
}

export default Component;
