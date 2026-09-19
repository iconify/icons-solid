import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2x8iab1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m2x8iab1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:comment-plus-solid"} {...others} />);
}

export default Component;
