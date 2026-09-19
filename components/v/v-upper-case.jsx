import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmt_occ7p.css';

const viewBox = {"width":548,"height":762};
const content = `<path class="tmt_occ7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:v-upper-case"} {...others} />);
}

export default Component;
