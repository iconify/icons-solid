import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1aks1oms.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q1aks1oms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:division-math-symbol-circle-bold"} {...others} />);
}

export default Component;
