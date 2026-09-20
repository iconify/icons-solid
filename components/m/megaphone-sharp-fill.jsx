import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij6qmgb8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ij6qmgb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:megaphone-sharp-fill"} {...others} />);
}

export default Component;
