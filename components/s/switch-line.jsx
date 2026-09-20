import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a46wson3l.css';
import '../../css/u/uwyl_bc5s.css';
import '../../css/t/trx7e_e5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a46wson3l"/><path class="uwyl_bc5s"/><path class="trx7e_e5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:switch-line"} {...others} />);
}

export default Component;
