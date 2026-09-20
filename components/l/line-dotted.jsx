import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk_n2-62d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kk_n2-62d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:line-dotted"} {...others} />);
}

export default Component;
