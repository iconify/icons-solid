import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjjbx7o6y.css';
import '../../css/m/mpr9ncc0j.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="tjjbx7o6y"/><path class="mpr9ncc0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:investing-and-banking-solid"} {...others} />);
}

export default Component;
