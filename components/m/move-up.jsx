import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otgl_qb9b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="otgl_qb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:move-up"} {...others} />);
}

export default Component;
