import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpyljtb0t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rpyljtb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bear-spray-can-with-spray-and-peso"} {...others} />);
}

export default Component;
