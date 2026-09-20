import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vism6qblg.css';
import '../../css/n/nnx_4qb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vism6qblg"/><path class="nnx_4qb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-refresh-light"} {...others} />);
}

export default Component;
