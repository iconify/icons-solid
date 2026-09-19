import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbddd627w.css';
import '../../css/p/pia7y9bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hbddd627w"/><path class="pia7y9bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:add-to-queue"} {...others} />);
}

export default Component;
