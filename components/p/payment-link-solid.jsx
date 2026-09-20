import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msm96vi3m.css';
import '../../css/h/hstvx30-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="msm96vi3m"/><path class="hstvx30-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:payment-link-solid"} {...others} />);
}

export default Component;
