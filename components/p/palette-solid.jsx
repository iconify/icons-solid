import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a268_s4rr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a268_s4rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:palette-solid"} {...others} />);
}

export default Component;
