import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7423xb5z.css';
import '../../css/v/vd8i_6yln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o7423xb5z"/><path class="vd8i_6yln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pulse-2-bold"} {...others} />);
}

export default Component;
