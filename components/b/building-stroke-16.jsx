import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as14hklrl.css';
import '../../css/x/x-r-buvun.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="as14hklrl"/><path class="x-r-buvun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:building-stroke-16"} {...others} />);
}

export default Component;
