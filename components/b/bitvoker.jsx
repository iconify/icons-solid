import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpc-xvb4g.css';
import '../../css/y/y1hp2dbup.css';
import '../../css/a/abi1unzyi.css';
import '../../css/a/a8q9_8sir.css';
import '../../css/o/opvirnbes.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mpc-xvb4g"/><path class="y1hp2dbup"/><path class="abi1unzyi"/><path class="a8q9_8sir"/><path class="opvirnbes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bitvoker"} {...others} />);
}

export default Component;
