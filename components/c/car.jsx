import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyor_thbf.css';
import '../../css/p/psi0ttbxr.css';

const viewBox = {"width":20,"height":20};
const content = `<circle class="oyor_thbf"/><path class="psi0ttbxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:car"} {...others} />);
}

export default Component;
