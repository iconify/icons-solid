import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cth7kpfnp.css';
import '../../css/a/azpullbqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cth7kpfnp"/><path class="azpullbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bolt-bold-duotone"} {...others} />);
}

export default Component;
