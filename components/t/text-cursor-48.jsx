import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv2oc8b9w.css';
import '../../css/y/ya6awqbqs.css';
import '../../css/t/toyqfjbll.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vv2oc8b9w"/><path class="ya6awqbqs"/><path class="toyqfjbll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-cursor-48"} {...others} />);
}

export default Component;
