import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezmn_4spe.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ezmn_4spe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:calculator-outline"} {...others} />);
}

export default Component;
