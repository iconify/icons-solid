import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vey7tzb_i.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="vey7tzb_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:polygon-pt"} {...others} />);
}

export default Component;
