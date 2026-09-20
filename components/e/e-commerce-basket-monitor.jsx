import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ui-320b_k.css';
import '../../css/m/mgacobbqu.css';
import '../../css/u/u9e3mk9nq.css';
import '../../css/j/j6qaewbmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ui-320b_k"/><path class="mgacobbqu"/><path class="u9e3mk9nq"/><path class="j6qaewbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:e-commerce-basket-monitor"} {...others} />);
}

export default Component;
