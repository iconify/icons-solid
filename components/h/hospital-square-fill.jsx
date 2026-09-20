import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_ei-vbiq.css';
import '../../css/v/vexocobrh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_ei-vbiq"/><path class="vexocobrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:hospital-square-fill"} {...others} />);
}

export default Component;
