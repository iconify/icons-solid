import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub-8msbxg.css';
import '../../css/u/u68we71_t.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="ub-8msbxg"/><path class="u68we71_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chair-filled"} {...others} />);
}

export default Component;
