import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emu7ok8id.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="emu7ok8id"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:labor-hands-action-bold"} {...others} />);
}

export default Component;
