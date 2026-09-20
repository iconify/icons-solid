import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghx9yzbxt.css';
import '../../css/k/ktjyq3bmf.css';
import '../../css/v/v0b7vsbjy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ghx9yzbxt"/><path class="ktjyq3bmf"/><path class="v0b7vsbjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nct"} {...others} />);
}

export default Component;
