import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa41-ac5j.css';
import '../../css/m/mn-fhob2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pa41-ac5j"/><path clip-rule="evenodd" class="mn-fhob2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:zero-network"} {...others} />);
}

export default Component;
