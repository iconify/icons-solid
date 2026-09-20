import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxwrar36v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sxwrar36v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:remove-bold-bold"} {...others} />);
}

export default Component;
