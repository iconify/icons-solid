import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6lk2bcmw.css';
import '../../css/p/pf0ka8bym.css';
import '../../css/n/nr_itt2gj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="s6lk2bcmw"/><path class="pf0ka8bym"/><path class="nr_itt2gj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:clean-broom-wipe"} {...others} />);
}

export default Component;
