import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsfup6hkd.css';
import '../../css/m/mwsqe_7mb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dsfup6hkd"/><path class="mwsqe_7mb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:virus-off-filled"} {...others} />);
}

export default Component;
