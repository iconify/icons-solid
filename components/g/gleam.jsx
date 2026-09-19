import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn7behsca.css';
import '../../css/a/av17rs-8h.css';
import '../../css/u/uvs-qupzg.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hn7behsca"/><path class="av17rs-8h"/><path class="uvs-qupzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gleam"} {...others} />);
}

export default Component;
