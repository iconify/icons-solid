import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqlze7bpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kqlze7bpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:archive-minus"} {...others} />);
}

export default Component;
