import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdckdr6_d.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="hdckdr6_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:fish-cleaning"} {...others} />);
}

export default Component;
