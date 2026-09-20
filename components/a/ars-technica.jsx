import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3fm6ybam.css';
import '../../css/t/tegirhu2m.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="f3fm6ybam"/><path class="tegirhu2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ars-technica"} {...others} />);
}

export default Component;
