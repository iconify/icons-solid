import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er6yw3a_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="er6yw3a_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paint-roller-broken"} {...others} />);
}

export default Component;
