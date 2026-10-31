import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/niuelpbca.css';
import '../../css/h/hsgjtibkt.css';
import '../../css/e/e-xmbx7qy.css';
import '../../css/v/vjl19yb4p.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="niuelpbca"/><path class="hsgjtibkt"/><path class="e-xmbx7qy"/><path class="vjl19yb4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:burundi"} {...others} />);
}

export default Component;
