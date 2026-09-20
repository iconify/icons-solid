import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e__73ozkc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="e__73ozkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrows-left-right-above-water"} {...others} />);
}

export default Component;
