import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q83fie9rd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q83fie9rd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:user-square-fill"} {...others} />);
}

export default Component;
