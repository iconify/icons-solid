import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/undukhbqa.css';
import '../../css/m/m_xvzmb-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="undukhbqa"/><path clip-rule="evenodd" class="m_xvzmb-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:search-filled"} {...others} />);
}

export default Component;
