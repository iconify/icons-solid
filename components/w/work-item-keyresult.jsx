import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hybfehb-a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hybfehb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:work-item-keyresult"} {...others} />);
}

export default Component;
