import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf863cbsv.css';
import '../../css/z/zfmuiycex.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nf863cbsv"/><path class="zfmuiycex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-up-bold-duotone"} {...others} />);
}

export default Component;
