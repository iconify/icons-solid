import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1t582b-q.css';
import '../../css/t/t3ojccldl.css';
import '../../css/d/duyy9ac2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z1t582b-q"/><path class="t3ojccldl"/><path class="duyy9ac2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mobile-blocked"} {...others} />);
}

export default Component;
