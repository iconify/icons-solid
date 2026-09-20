import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6se-3btu.css';
import '../../css/c/ci8kzdumq.css';
import '../../css/g/glilp5dof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j6se-3btu"/><path class="ci8kzdumq"/><path clip-rule="evenodd" class="glilp5dof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:safe-vault-flat"} {...others} />);
}

export default Component;
