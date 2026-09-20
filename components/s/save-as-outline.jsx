import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pia9tjb0f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pia9tjb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:save-as-outline"} {...others} />);
}

export default Component;
