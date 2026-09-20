import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhohc86ec.css';
import '../../css/c/c9c69accn.css';
import '../../css/p/pev60w0wp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lhohc86ec"/><path class="c9c69accn"/><path class="pev60w0wp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ticket-add-bold"} {...others} />);
}

export default Component;
