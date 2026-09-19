import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_0pz_gks.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="k_0pz_gks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:mic-slash"} {...others} />);
}

export default Component;
