import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kctlzdb3q.css';
import '../../css/h/habz1g55j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kctlzdb3q"/><path class="habz1g55j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:location-pin"} {...others} />);
}

export default Component;
