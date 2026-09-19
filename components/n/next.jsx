import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6ir_ybos.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="o6ir_ybos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:next"} {...others} />);
}

export default Component;
