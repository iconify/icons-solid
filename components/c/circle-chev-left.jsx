import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_6x1nbxh.css';
import '../../css/k/k18y-k1ul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_6x1nbxh"/><path class="k18y-k1ul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:circle-chev-left"} {...others} />);
}

export default Component;
