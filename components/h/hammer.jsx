import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7uoh_pkm.css';

const viewBox = {"width":1024,"height":960};
const content = `<path class="t7uoh_pkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:hammer"} {...others} />);
}

export default Component;
