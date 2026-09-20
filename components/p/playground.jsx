import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlf6_vbtf.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="mlf6_vbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:playground"} {...others} />);
}

export default Component;
