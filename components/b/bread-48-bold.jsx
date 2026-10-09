import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udf9libzz.css';
import '../../css/a/a8yx3tbzs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="udf9libzz"/><path class="a8yx3tbzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bread-48-bold"} {...others} />);
}

export default Component;
