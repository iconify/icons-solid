import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6a_1ssme.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w6a_1ssme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:arrow-down-circle-fill"} {...others} />);
}

export default Component;
