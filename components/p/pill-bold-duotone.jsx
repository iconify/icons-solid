import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-1l6vtvu.css';
import '../../css/z/zdawap23x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-1l6vtvu"/><path class="zdawap23x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pill-bold-duotone"} {...others} />);
}

export default Component;
