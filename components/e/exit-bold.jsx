import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv2tejbrr.css';
import '../../css/l/ltreopbjj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tv2tejbrr"/><path class="ltreopbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:exit-bold"} {...others} />);
}

export default Component;
