import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhh9m-5ks.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yhh9m-5ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-home-logo-solid"} {...others} />);
}

export default Component;
