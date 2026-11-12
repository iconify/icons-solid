import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nim_7djxm.css';
import '../../css/g/gfuuvl7et.css';
import '../../css/f/fme3m9bxm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nim_7djxm"/><path class="gfuuvl7et"/><path class="fme3m9bxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:registry-console-dark"} {...others} />);
}

export default Component;
