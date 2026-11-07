import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdnocya5g.css';
import '../../css/s/sfzfjg58s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hdnocya5g"/><path class="sfzfjg58s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-bottom-down-bold"} {...others} />);
}

export default Component;
