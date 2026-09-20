import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tczeekb1d.css';
import '../../css/l/liu-dcbqj.css';
import '../../css/b/b1qb9xbgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tczeekb1d"/><path clip-rule="evenodd" class="liu-dcbqj"/><path class="b1qb9xbgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:baggage-flat"} {...others} />);
}

export default Component;
