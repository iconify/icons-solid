import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f9mlk6pzf.css';
import '../../css/j/jqd0qob-o.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/l/lvkw2cbml.css';
import '../../css/f/f2qfvf6at.css';
import '../../css/o/oi1cgjbfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f9mlk6pzf"/><path class="jqd0qob-o"/><g class="mc2zb0bvp"><path class="lvkw2cbml"/><path class="f2qfvf6at"/><path class="oi1cgjbfr"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bath-bold-duotone"} {...others} />);
}

export default Component;
