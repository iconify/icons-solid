import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mz6fj3j9r.css';
import '../../css/o/o6opfsdxn.css';
import '../../css/d/dyouq3z1b.css';
import '../../css/p/ppg4n8m6r.css';
import '../../css/g/gm0tkybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mz6fj3j9r"/><path class="o6opfsdxn"/><path class="dyouq3z1b"/><path class="ppg4n8m6r"/><path class="gm0tkybzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:tetris"} {...others} />);
}

export default Component;
