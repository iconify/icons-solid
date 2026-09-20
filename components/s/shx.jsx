import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp1y_acrv.css';
import '../../css/x/xm9k567sy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bp1y_acrv"/><path class="xm9k567sy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:shx"} {...others} />);
}

export default Component;
