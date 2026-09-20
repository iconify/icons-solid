import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9ex8-brm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q9ex8-brm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clock-square-bold"} {...others} />);
}

export default Component;
