import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxj4z7b4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxj4z7b4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-dashed-check"} {...others} />);
}

export default Component;
