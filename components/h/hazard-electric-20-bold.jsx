import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcia1ds6l.css';
import '../../css/i/il2c4vb5k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pcia1ds6l"/><path class="il2c4vb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-electric-20-bold"} {...others} />);
}

export default Component;
