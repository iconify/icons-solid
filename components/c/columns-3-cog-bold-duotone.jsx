import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v741mrbgv.css';
import '../../css/g/gyjvu3nrz.css';
import '../../css/q/qqqjwibyx.css';
import '../../css/x/xihhsebra.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v741mrbgv"/><path class="gyjvu3nrz"/><path class="qqqjwibyx"/><path class="xihhsebra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-cog-bold-duotone"} {...others} />);
}

export default Component;
