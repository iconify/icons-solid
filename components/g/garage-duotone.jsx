import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4xcodbxl.css';
import '../../css/p/pe_3scbym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t4xcodbxl"/><path class="pe_3scbym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:garage-duotone"} {...others} />);
}

export default Component;
