import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc82gg_se.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nc82gg_se"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:winged-horse-rearing"} {...others} />);
}

export default Component;
