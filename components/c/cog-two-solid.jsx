import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjva_kt4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hjva_kt4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:cog-two-solid"} {...others} />);
}

export default Component;
