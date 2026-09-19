import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj4p5eb8q.css';
import '../../css/n/nm2y6cbuf.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pj4p5eb8q"/><path class="nm2y6cbuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vagrant"} {...others} />);
}

export default Component;
