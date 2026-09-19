import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6ylgd8-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6ylgd8-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-bookmark-plus"} {...others} />);
}

export default Component;
