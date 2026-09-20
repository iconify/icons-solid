import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/m/m084llbuo.css';
import '../../css/d/d2ddiib0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="m084llbuo"/><path class="d2ddiib0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:favorites"} {...others} />);
}

export default Component;
