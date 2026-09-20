import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnnx2lbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wnnx2lbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:arrow-diagonal-2-flat"} {...others} />);
}

export default Component;
