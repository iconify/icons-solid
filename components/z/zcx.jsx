import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff3rfh2ld.css';
import '../../css/l/les5albff.css';
import '../../css/t/toxedhbmi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ff3rfh2ld"/><path class="les5albff"/><path class="toxedhbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:zcx"} {...others} />);
}

export default Component;
