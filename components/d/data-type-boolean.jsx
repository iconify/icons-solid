import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6m5k9q_i.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="a6m5k9q_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:data-type-boolean"} {...others} />);
}

export default Component;
