import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/d/d4xgu9b9g.css';
import '../../css/x/x8wgkgyun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="d4xgu9b9g"/><path class="x8wgkgyun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:volume-2"} {...others} />);
}

export default Component;
