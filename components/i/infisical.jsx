import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6gs6rbtb.css';
import '../../css/m/mf-rqbcch.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j6gs6rbtb"/><path class="mf-rqbcch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:infisical"} {...others} />);
}

export default Component;
