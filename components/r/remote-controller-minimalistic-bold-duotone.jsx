import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be24kjn_m.css';
import '../../css/e/erff_3del.css';
import '../../css/y/yrcey2bdn.css';
import '../../css/b/biqv3ubbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="be24kjn_m"/><path class="erff_3del"/><path class="yrcey2bdn"/><path clip-rule="evenodd" class="biqv3ubbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
