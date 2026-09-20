import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k91r18brr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k91r18brr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:vidicon-2-line"} {...others} />);
}

export default Component;
