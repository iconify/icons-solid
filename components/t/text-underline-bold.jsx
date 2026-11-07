import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eipxycc0p.css';
import '../../css/l/lvp3cpbur.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eipxycc0p"/><path class="lvp3cpbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-underline-bold"} {...others} />);
}

export default Component;
