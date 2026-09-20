import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s7m10y-tu.css';
import '../../css/l/ls11zrbpz.css';
import '../../css/j/jmw85sbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="s7m10y-tu"/><path class="ls11zrbpz"/><path class="jmw85sbjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sun-fog"} {...others} />);
}

export default Component;
