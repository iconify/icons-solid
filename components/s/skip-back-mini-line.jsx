import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pm3h6bb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pm3h6bb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:skip-back-mini-line"} {...others} />);
}

export default Component;
