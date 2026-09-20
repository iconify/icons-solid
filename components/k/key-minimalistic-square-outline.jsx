import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtdmv7zzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vtdmv7zzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:key-minimalistic-square-outline"} {...others} />);
}

export default Component;
