import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogx29lbfw.css';
import '../../css/a/azwen8bub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ogx29lbfw"/><path clip-rule="evenodd" class="azwen8bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:rocket-filled"} {...others} />);
}

export default Component;
