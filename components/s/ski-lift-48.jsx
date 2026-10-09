import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f54a80bxs.css';
import '../../css/h/hg9w13bex.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f54a80bxs"/><path class="hg9w13bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ski-lift-48"} {...others} />);
}

export default Component;
