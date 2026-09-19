import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o24e-tbjw.css';
import '../../css/j/jzcm3cc4e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o24e-tbjw"/><path class="jzcm3cc4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:gauge"} {...others} />);
}

export default Component;
