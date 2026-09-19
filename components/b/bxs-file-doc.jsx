import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfoaij8re.css';
import '../../css/h/hkohktbym.css';
import '../../css/q/q-k3xvb8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bfoaij8re"/><path class="hkohktbym"/><path class="q-k3xvb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-file-doc"} {...others} />);
}

export default Component;
