import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u76w8abec.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="u76w8abec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:chart-types"} {...others} />);
}

export default Component;
