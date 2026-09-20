import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7xx_wbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n7xx_wbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:arrow-up-long"} {...others} />);
}

export default Component;
