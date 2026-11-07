import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqeyqsb0i.css';
import '../../css/d/dek9bkq9j.css';
import '../../css/s/svjtfbbmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kqeyqsb0i"/><path class="dek9bkq9j"/><path clip-rule="evenodd" class="svjtfbbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:passport-bold"} {...others} />);
}

export default Component;
