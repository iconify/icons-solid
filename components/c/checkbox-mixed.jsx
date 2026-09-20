import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stgx23nhu.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="stgx23nhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:checkbox-mixed"} {...others} />);
}

export default Component;
