import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kogkj5uzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kogkj5uzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-maps-logo-block"} {...others} />);
}

export default Component;
