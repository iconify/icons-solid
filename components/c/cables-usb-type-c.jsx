import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuca1sdhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xuca1sdhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cables-usb-type-c"} {...others} />);
}

export default Component;
