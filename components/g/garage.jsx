import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sab-3jbuj.css';
import '../../css/u/ugqzsebbh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sab-3jbuj"/><path class="ugqzsebbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:garage"} {...others} />);
}

export default Component;
