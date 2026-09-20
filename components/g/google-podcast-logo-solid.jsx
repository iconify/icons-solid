import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v09uzrn2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v09uzrn2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-podcast-logo-solid"} {...others} />);
}

export default Component;
