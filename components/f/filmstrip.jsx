import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prd4v3_sp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="prd4v3_sp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:filmstrip"} {...others} />);
}

export default Component;
