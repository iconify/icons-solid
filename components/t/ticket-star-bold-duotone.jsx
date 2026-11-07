import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l17661bjv.css';
import '../../css/q/qhhul4b8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l17661bjv"/><path class="qhhul4b8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ticket-star-bold-duotone"} {...others} />);
}

export default Component;
