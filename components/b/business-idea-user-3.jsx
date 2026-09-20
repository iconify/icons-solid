import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/beojh9bcd.css';
import '../../css/c/ccajs2bja.css';
import '../../css/n/nehczmnzm.css';
import '../../css/k/kr0sjibth.css';
import '../../css/o/o-h4-tbnb.css';
import '../../css/l/l5n2gkddp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="beojh9bcd"/><path class="ccajs2bja"/><path class="nehczmnzm"/><path class="kr0sjibth"/><path class="o-h4-tbnb"/><path class="l5n2gkddp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-idea-user-3"} {...others} />);
}

export default Component;
