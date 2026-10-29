import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wn8xc24mn.css';
import '../../css/c/cfnb1cxzk.css';
import '../../css/u/u2h1qi64o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wn8xc24mn"/><path class="cfnb1cxzk"/><path class="u2h1qi64o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:repeat-2"} {...others} />);
}

export default Component;
