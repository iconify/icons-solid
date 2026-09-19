import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/audsjhv2z.css';
import '../../css/k/k6wji4t4d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="audsjhv2z"/><path class="k6wji4t4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:sort-ascending"} {...others} />);
}

export default Component;
