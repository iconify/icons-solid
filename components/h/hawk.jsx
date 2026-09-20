import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-0j_gbpc.css';
import '../../css/l/lxltxnh8y.css';
import '../../css/d/daur5ccoo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-0j_gbpc"/><path clip-rule="evenodd" class="lxltxnh8y"/><path class="daur5ccoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hawk"} {...others} />);
}

export default Component;
