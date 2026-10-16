import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etl048b3a.css';
import '../../css/a/alhm_84rh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="etl048b3a"/><path class="alhm_84rh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:route-20-bold"} {...others} />);
}

export default Component;
