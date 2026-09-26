import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2fpl2orn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b2fpl2orn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-minus-bold"} {...others} />);
}

export default Component;
