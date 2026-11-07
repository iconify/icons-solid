import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly-_et2sc.css';
import '../../css/f/fkxo3pbyr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ly-_et2sc"/><path clip-rule="evenodd" class="fkxo3pbyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-medicine-bold-duotone"} {...others} />);
}

export default Component;
