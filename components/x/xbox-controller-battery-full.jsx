import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwknlm9zg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wwknlm9zg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:xbox-controller-battery-full"} {...others} />);
}

export default Component;
