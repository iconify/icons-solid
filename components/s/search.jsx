import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n82zcy6-h.css';
import '../../css/c/clhe_ezsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n82zcy6-h"/><path class="clhe_ezsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:search"} {...others} />);
}

export default Component;
