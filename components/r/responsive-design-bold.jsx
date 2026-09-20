import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq--7gh0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wq--7gh0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:responsive-design-bold"} {...others} />);
}

export default Component;
