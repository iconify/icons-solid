import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6x4xva_v.css';

const viewBox = {"width":1408,"height":1792};
const content = `<path class="x6x4xva_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:cutlery"} {...others} />);
}

export default Component;
