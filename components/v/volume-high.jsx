import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a0kcj6vvf.css';
import '../../css/x/xvqxteest.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a0kcj6vvf"/><path class="xvqxteest"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:volume-high"} {...others} />);
}

export default Component;
