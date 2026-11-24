import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp17bzlwb.css';
import '../../css/m/m9m_5-b5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tp17bzlwb"/><path clip-rule="evenodd" class="m9m_5-b5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bot-x-filled"} {...others} />);
}

export default Component;
