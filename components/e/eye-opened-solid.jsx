import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6uz3dquh.css';
import '../../css/c/cn5tumcdn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6uz3dquh"/><path class="cn5tumcdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:eye-opened-solid"} {...others} />);
}

export default Component;
