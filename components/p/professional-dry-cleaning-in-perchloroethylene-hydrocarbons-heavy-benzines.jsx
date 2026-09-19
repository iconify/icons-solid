import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dkzh7xq6v.css';
import '../../css/m/m-lsmsbpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dkzh7xq6v"/><path class="m-lsmsbpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ginetex:professional-dry-cleaning-in-perchloroethylene-hydrocarbons-heavy-benzines"} {...others} />);
}

export default Component;
