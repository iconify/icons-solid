import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-64p5ubv.css';
import '../../css/m/md286fbip.css';
import '../../css/b/bdw0vhb6r.css';
import '../../css/w/w40ak50xy.css';
import '../../css/w/w_01-_bnw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="x-64p5ubv"/><g class="md286fbip"><path class="bdw0vhb6r"/><path class="w40ak50xy"/><path class="w_01-_bnw"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:tusd"} {...others} />);
}

export default Component;
