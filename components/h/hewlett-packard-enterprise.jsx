import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdhfrrb5a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wdhfrrb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hewlett-packard-enterprise"} {...others} />);
}

export default Component;
