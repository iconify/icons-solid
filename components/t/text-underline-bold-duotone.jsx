import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixjkhbszw.css';
import '../../css/l/lvp3cpbur.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ixjkhbszw"/><path class="lvp3cpbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-underline-bold-duotone"} {...others} />);
}

export default Component;
