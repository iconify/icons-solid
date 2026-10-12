import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su2ruutrf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="su2ruutrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-indent"} {...others} />);
}

export default Component;
