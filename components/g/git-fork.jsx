import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/og_9js9al.css';
import '../../css/u/ugw1omula.css';
import '../../css/r/rh36-b77g.css';
import '../../css/d/dfxq8e26p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="og_9js9al"/><circle class="ugw1omula"/><circle class="rh36-b77g"/><path class="dfxq8e26p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:git-fork"} {...others} />);
}

export default Component;
