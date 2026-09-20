import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll-v7cc5a.css';
import '../../css/t/t7ok3w4ym.css';
import '../../css/o/onfmwrbco.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ll-v7cc5a"/><path class="t7ok3w4ym"/><path class="onfmwrbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xyo"} {...others} />);
}

export default Component;
