import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em4_z4t5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="em4_z4t5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:wrench-flat"} {...others} />);
}

export default Component;
