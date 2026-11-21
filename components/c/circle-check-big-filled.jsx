import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhi8lybtb.css';
import '../../css/l/lgjscu5ps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jhi8lybtb"/><path class="lgjscu5ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-check-big-filled"} {...others} />);
}

export default Component;
