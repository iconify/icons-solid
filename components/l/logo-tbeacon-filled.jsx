import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scsbkobgd.css';
import '../../css/r/ro_92tjwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="scsbkobgd"/><path class="ro_92tjwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-tbeacon-filled"} {...others} />);
}

export default Component;
