import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wump89b3m.css';
import '../../css/c/c7cnpg7_a.css';
import '../../css/j/jbzcxub9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wump89b3m"/><path class="c7cnpg7_a"/><path class="jbzcxub9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:arrow-down-2"} {...others} />);
}

export default Component;
