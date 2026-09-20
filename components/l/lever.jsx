import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9t7j4b3h.css';
import '../../css/a/amr0dcbch.css';
import '../../css/a/az17gfbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l9t7j4b3h"/><path class="amr0dcbch"/><path class="az17gfbpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lever"} {...others} />);
}

export default Component;
