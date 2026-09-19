import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inbfl_ipd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="inbfl_ipd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-right-start-on-rectangle-solid"} {...others} />);
}

export default Component;
