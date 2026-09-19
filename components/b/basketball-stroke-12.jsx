import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skiiyvb2f.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="skiiyvb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:basketball-stroke-12"} {...others} />);
}

export default Component;
