import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbcy3hzsq.css';
import '../../css/l/lwa5up2ml.css';
import '../../css/r/rw27qob_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mbcy3hzsq"/><path class="lwa5up2ml"/><path class="rw27qob_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:help-octagon"} {...others} />);
}

export default Component;
