import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhln8idvw.css';
import '../../css/k/k7yugubqn.css';
import '../../css/x/xggoo1bag.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lhln8idvw"/><path class="k7yugubqn"/><path clip-rule="evenodd" class="xggoo1bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-plus-outline"} {...others} />);
}

export default Component;
