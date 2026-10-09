import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9vsoabzg.css';
import '../../css/v/vj1jlxbvg.css';
import '../../css/s/s24mw7bud.css';
import '../../css/m/mkjr0bxlm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b9vsoabzg"/><path class="vj1jlxbvg"/><path class="s24mw7bud"/><path class="mkjr0bxlm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-storage-48-bold"} {...others} />);
}

export default Component;
