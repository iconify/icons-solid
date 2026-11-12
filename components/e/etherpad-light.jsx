import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5biwmbup.css';
import '../../css/g/gjgzt7bhj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q5biwmbup"/><path class="gjgzt7bhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:etherpad-light"} {...others} />);
}

export default Component;
