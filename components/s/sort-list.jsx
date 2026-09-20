import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/i/iuc18tbpb.css';
import '../../css/l/lkr83rggl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="iuc18tbpb"/><path class="lkr83rggl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sort-list"} {...others} />);
}

export default Component;
