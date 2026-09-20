import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq601vtik.css';
import '../../css/o/om7fi_u-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mq601vtik"/><path class="om7fi_u-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:glink"} {...others} />);
}

export default Component;
