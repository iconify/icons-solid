import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9q-c3bab.css';
import '../../css/l/lo4kwvbbu.css';
import '../../css/r/r7rnzrbos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h9q-c3bab"/><path clip-rule="evenodd" class="lo4kwvbbu"/><path class="r7rnzrbos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:mine-cart-2-flat"} {...others} />);
}

export default Component;
