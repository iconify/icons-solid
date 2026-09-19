import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7_ed9k0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t7_ed9k0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:qr-code-solid"} {...others} />);
}

export default Component;
