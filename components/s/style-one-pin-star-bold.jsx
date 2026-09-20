import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmr60dzfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zmr60dzfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:style-one-pin-star-bold"} {...others} />);
}

export default Component;
