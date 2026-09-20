import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqby38bfg.css';
import '../../css/u/uzk27_m6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eqby38bfg"/><path class="uzk27_m6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:calculator-1"} {...others} />);
}

export default Component;
