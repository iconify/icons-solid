import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5a_1ab3h.css';
import '../../css/k/kdyg1ukjd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t5a_1ab3h"/><path class="kdyg1ukjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:arrow-right"} {...others} />);
}

export default Component;
