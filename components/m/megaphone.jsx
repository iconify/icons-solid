import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us_otrb6w.css';
import '../../css/o/osmzo-b7w.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="us_otrb6w"/><path class="osmzo-b7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:megaphone"} {...others} />);
}

export default Component;
