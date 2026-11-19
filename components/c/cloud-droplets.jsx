import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/my-ewj-jl.css';
import '../../css/u/uaiw1fbwq.css';
import '../../css/p/pp5ysobjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="my-ewj-jl"/><path class="uaiw1fbwq"/><path class="pp5ysobjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-droplets"} {...others} />);
}

export default Component;
