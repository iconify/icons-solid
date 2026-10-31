import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u1574bcew.css';
import '../../css/l/lpdj_7bbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u1574bcew"/><path class="lpdj_7bbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:simplify"} {...others} />);
}

export default Component;
