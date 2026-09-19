import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnb6en77t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dnb6en77t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mono-icons:caret-down"} {...others} />);
}

export default Component;
