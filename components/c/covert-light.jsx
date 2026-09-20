import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/l/lept75j3w.css';
import '../../css/m/m7gx5pnrs.css';
import '../../css/j/jxy19bnzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="lept75j3w"/><path class="m7gx5pnrs"/><path class="jxy19bnzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:covert-light"} {...others} />);
}

export default Component;
