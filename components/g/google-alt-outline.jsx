import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr4nnobax.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pr4nnobax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:google-alt-outline"} {...others} />);
}

export default Component;
