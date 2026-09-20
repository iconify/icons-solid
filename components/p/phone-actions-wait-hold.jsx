import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sofr25-sz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sofr25-sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:phone-actions-wait-hold"} {...others} />);
}

export default Component;
