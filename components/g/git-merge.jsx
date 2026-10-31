import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g653zybxd.css';
import '../../css/b/bo-r-rb5p.css';
import '../../css/w/wzva3qf9w.css';
import '../../css/f/f5vnnmw2g.css';
import '../../css/n/nzvhm2bhf.css';
import '../../css/q/qg1yd_b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="g653zybxd wm-shadow"/><path class="bo-r-rb5p wm-shadow"/><path class="wzva3qf9w"/><path class="f5vnnmw2g"/><path class="nzvhm2bhf"/><path class="qg1yd_b0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:git-merge"} {...others} />);
}

export default Component;
