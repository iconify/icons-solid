import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vf2_v_89r.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="vf2_v_89r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:bitcoinalt"} {...others} />);
}

export default Component;
