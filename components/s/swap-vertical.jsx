import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn64yx6un.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tn64yx6un"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:swap-vertical"} {...others} />);
}

export default Component;
