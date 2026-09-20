import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww6kmx10n.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ww6kmx10n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:art-gallery-15"} {...others} />);
}

export default Component;
