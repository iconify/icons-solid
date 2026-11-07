import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plk4vjb9x.css';
import '../../css/t/tl7q7ybjr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="plk4vjb9x"/><path class="tl7q7ybjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chef-hat-heart-bold"} {...others} />);
}

export default Component;
