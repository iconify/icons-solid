import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/j/jor_1ib2e.css';
import '../../css/t/tdirdccsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="jor_1ib2e"/><path class="tdirdccsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:playlist-repeat-list-thin"} {...others} />);
}

export default Component;
