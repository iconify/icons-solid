import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w03spsqqf.css';
import '../../css/c/cprxbbc2g.css';
import '../../css/f/fhe7bvbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w03spsqqf"/><path class="cprxbbc2g"/><path class="fhe7bvbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:align-top"} {...others} />);
}

export default Component;
