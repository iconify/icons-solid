import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om1sbjblc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="om1sbjblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:wrench-clock-outline"} {...others} />);
}

export default Component;
