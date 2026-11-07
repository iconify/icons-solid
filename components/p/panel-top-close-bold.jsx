import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9apwmb5t.css';
import '../../css/s/sks052b6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b9apwmb5t"/><path class="sks052b6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-top-close-bold"} {...others} />);
}

export default Component;
