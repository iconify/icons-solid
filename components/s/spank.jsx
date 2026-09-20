import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urgyh8mug.css';
import '../../css/g/gx_3x244w.css';
import '../../css/y/y4nqx7dgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="urgyh8mug"/><path class="gx_3x244w"/><path class="y4nqx7dgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:spank"} {...others} />);
}

export default Component;
