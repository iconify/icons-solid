import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kl9kuhubb.css';
import '../../css/x/x-phowbvb.css';
import '../../css/m/mz2-ixb7e.css';
import '../../css/r/r1g-ljbnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kl9kuhubb"/><path clip-rule="evenodd" class="x-phowbvb"/><path clip-rule="evenodd" class="mz2-ixb7e"/><path class="r1g-ljbnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:passport-globe-flat"} {...others} />);
}

export default Component;
