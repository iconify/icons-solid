import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcif0d1_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zcif0d1_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:scooter-3-bold"} {...others} />);
}

export default Component;
