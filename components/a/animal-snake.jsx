import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4_kz36oc.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="r4_kz36oc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:animal-snake"} {...others} />);
}

export default Component;
