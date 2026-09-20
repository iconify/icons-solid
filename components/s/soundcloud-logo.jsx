import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlxaoh3ba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nlxaoh3ba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:soundcloud-logo"} {...others} />);
}

export default Component;
