import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dygia2sgr.css';
import '../../css/h/hbuiv42xj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dygia2sgr"/><path class="hbuiv42xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skip-previous-bold-duotone"} {...others} />);
}

export default Component;
