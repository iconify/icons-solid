import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvoy7epho.css';
import '../../css/h/hyinz4b3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tvoy7epho"/><path class="hyinz4b3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:alu"} {...others} />);
}

export default Component;
