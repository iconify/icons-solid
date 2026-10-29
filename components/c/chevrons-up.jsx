import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lndkskbcm.css';
import '../../css/u/ut80tnm-z.css';
import '../../css/p/pwyxzrs6i.css';
import '../../css/y/ys2kzn7au.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lndkskbcm wm-k"/><path class="ut80tnm-z wm-k"/><path class="pwyxzrs6i wm-a"/><path class="wm-a ys2kzn7au"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chevrons-up"} {...others} />);
}

export default Component;
