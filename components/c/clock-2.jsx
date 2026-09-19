import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k18y-k1ul.css';
import '../../css/g/g0hn70dyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k18y-k1ul"/><path class="g0hn70dyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:clock-2"} {...others} />);
}

export default Component;
