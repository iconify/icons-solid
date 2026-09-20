import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x28n-bb9e.css';
import '../../css/b/ba-uen-7c.css';
import '../../css/x/x8blwzbiy.css';
import '../../css/e/epmokt3_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x28n-bb9e"/><path class="ba-uen-7c"/><path class="x8blwzbiy"/><path class="epmokt3_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-compare"} {...others} />);
}

export default Component;
