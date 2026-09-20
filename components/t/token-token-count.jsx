import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwzs1uccg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kwzs1uccg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:token-token-count"} {...others} />);
}

export default Component;
