import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acoyk8bzs.css';
import '../../css/x/xe4n45bra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="acoyk8bzs"/><path clip-rule="evenodd" class="xe4n45bra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-cog-filled"} {...others} />);
}

export default Component;
