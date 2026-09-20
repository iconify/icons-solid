import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxsoy8glv.css';
import '../../css/q/q098jibdz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lxsoy8glv"/><path class="q098jibdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:arrow-circle-up"} {...others} />);
}

export default Component;
