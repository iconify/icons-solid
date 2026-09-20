import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj1pmedun.css';
import '../../css/n/nuy3iacup.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mj1pmedun"/><path class="nuy3iacup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:disability-parking-bold"} {...others} />);
}

export default Component;
