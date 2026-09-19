import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tod_2acqn.css';
import '../../css/h/hj1bo3bef.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tod_2acqn"/><path class="hj1bo3bef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-down-wide-narrow"} {...others} />);
}

export default Component;
