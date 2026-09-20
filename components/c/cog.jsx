import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfv3j0v9a.css';
import '../../css/h/hbhflsb1a.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="qfv3j0v9a"/><path class="hbhflsb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cog"} {...others} />);
}

export default Component;
