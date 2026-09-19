import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbb1_2bju.css';
import '../../css/w/w43j2ubna.css';

const viewBox = {"width":12,"height":12};
const content = `<circle class="nbb1_2bju"/><path class="w43j2ubna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:search-stroke-12"} {...others} />);
}

export default Component;
