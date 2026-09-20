import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs23_ib0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hs23_ib0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:plus-diamond"} {...others} />);
}

export default Component;
