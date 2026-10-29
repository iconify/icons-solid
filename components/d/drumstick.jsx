import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k3mij9nwy.css';
import '../../css/k/kjl88pbfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="k3mij9nwy"/><path class="kjl88pbfm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:drumstick"} {...others} />);
}

export default Component;
