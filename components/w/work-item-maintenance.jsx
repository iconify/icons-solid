import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb2rpab_w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eb2rpab_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:work-item-maintenance"} {...others} />);
}

export default Component;
