import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x82e92b6s.css';
import '../../css/u/ubp77pb_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x82e92b6s"/><path class="ubp77pb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pla"} {...others} />);
}

export default Component;
