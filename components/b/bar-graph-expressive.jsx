import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxr-fcc-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dxr-fcc-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:bar-graph-expressive"} {...others} />);
}

export default Component;
