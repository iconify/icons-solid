import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at2dx1rbn.css';
import '../../css/j/jti7sg69j.css';
import '../../css/p/pvmyau5uz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="at2dx1rbn"><path class="jti7sg69j"/><path class="pvmyau5uz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:synchronize-triangle"} {...others} />);
}

export default Component;
