import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o6bpeub0j.css';
import '../../css/s/s4twj4zjj.css';
import '../../css/x/x3v5_rbso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o6bpeub0j"/><path class="s4twj4zjj"/><path class="x3v5_rbso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:paste"} {...others} />);
}

export default Component;
