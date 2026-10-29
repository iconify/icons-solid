import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-gmum8gu.css';
import '../../css/m/m-dp6jb_c.css';
import '../../css/k/kjbif5bfj.css';
import '../../css/z/zmw3shyje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i-gmum8gu wm-k"/><path class="m-dp6jb_c wm-k"/><path class="kjbif5bfj wm-k"/><path class="wm-shine zmw3shyje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:arrow-left-right"} {...others} />);
}

export default Component;
