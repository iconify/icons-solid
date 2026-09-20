import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz8qy3bgs.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="kz8qy3bgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:stairs"} {...others} />);
}

export default Component;
