import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v82j94bfo.css';
import '../../css/d/dgp4q7bgb.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="v82j94bfo"/><path class="dgp4q7bgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:pallet"} {...others} />);
}

export default Component;
