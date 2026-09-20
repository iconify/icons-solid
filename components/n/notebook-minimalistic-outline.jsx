import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7mfpjuoc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u7mfpjuoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-minimalistic-outline"} {...others} />);
}

export default Component;
