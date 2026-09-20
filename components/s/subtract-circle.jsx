import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/it2102bas.css';
import '../../css/r/rt5hcccey.css';
import '../../css/e/egg53_k3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="it2102bas"/><path class="rt5hcccey"/><path class="egg53_k3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:subtract-circle"} {...others} />);
}

export default Component;
