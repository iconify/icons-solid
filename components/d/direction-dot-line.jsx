import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdagz9b_g.css';
import '../../css/m/mf2faab1e.css';
import '../../css/p/p83k8_fbw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pdagz9b_g"/><path class="mf2faab1e"/><path class="p83k8_fbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:direction-dot-line"} {...others} />);
}

export default Component;
