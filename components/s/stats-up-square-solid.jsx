import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qap_r6b7i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qap_r6b7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:stats-up-square-solid"} {...others} />);
}

export default Component;
