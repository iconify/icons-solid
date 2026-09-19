import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is07h1_2a.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="is07h1_2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:chevron-right"} {...others} />);
}

export default Component;
