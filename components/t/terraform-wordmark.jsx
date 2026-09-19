import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b75v6sxqz.css';
import '../../css/v/v85auebpa.css';
import '../../css/f/f2zzjubol.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="b75v6sxqz"/><path class="v85auebpa"/><path class="f2zzjubol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:terraform-wordmark"} {...others} />);
}

export default Component;
