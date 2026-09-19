import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twkmy8jve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="twkmy8jve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-user-detail"} {...others} />);
}

export default Component;
