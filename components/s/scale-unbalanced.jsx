import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6rxakbre.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w6rxakbre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:scale-unbalanced"} {...others} />);
}

export default Component;
