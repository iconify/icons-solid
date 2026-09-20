import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfvfo9eco.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qfvfo9eco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:medical-bag"} {...others} />);
}

export default Component;
