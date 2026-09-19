import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf7q6ji8c.css';
import '../../css/f/fvnxa3bsu.css';
import '../../css/m/mi_58-bbi.css';
import '../../css/l/leai81bxp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sf7q6ji8c"/><path class="fvnxa3bsu"/><path class="mi_58-bbi"/><path class="leai81bxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-python"} {...others} />);
}

export default Component;
