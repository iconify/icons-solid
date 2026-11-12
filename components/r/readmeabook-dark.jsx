import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1rbdisyq.css';
import '../../css/g/guf57jh0v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t1rbdisyq"/><path class="guf57jh0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:readmeabook-dark"} {...others} />);
}

export default Component;
