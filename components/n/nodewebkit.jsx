import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yni9wjbvy.css';
import '../../css/p/ppahphbla.css';
import '../../css/l/luhpwmbsn.css';
import '../../css/m/m9vou0fxn.css';
import '../../css/n/nsuhtqbhu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="yni9wjbvy"/><path class="ppahphbla"/><path class="luhpwmbsn"/><path class="m9vou0fxn"/><path class="nsuhtqbhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nodewebkit"} {...others} />);
}

export default Component;
