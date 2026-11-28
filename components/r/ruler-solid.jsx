import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxmsrw0ad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxmsrw0ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ruler-solid"} {...others} />);
}

export default Component;
