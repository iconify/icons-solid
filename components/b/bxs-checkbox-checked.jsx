import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svo32d08a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="svo32d08a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-checkbox-checked"} {...others} />);
}

export default Component;
