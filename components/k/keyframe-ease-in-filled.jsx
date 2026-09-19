import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/locm-c1zw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="locm-c1zw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:keyframe-ease-in-filled"} {...others} />);
}

export default Component;
