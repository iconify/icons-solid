import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqnfqd2jd.css';
import '../../css/r/rpr4dyb7y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nqnfqd2jd"/><path class="rpr4dyb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cloud-services"} {...others} />);
}

export default Component;
