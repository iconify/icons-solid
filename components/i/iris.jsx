import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya01r5b4e.css';
import '../../css/t/t_5-mteix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ya01r5b4e"/><path clip-rule="evenodd" class="t_5-mteix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:iris"} {...others} />);
}

export default Component;
