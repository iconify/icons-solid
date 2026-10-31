import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxlvi1bje.css';
import '../../css/r/r9m45djyc.css';
import '../../css/m/mempy7bqs.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="xxlvi1bje"/><path class="r9m45djyc"/><path class="mempy7bqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:czechia"} {...others} />);
}

export default Component;
