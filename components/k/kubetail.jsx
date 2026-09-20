import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqcszbc6x.css';
import '../../css/e/ety_7rmqz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uqcszbc6x"/><path class="ety_7rmqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kubetail"} {...others} />);
}

export default Component;
