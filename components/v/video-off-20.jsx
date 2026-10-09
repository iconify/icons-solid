import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1rxfewyg.css';
import '../../css/f/fx_ekx88i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x1rxfewyg"/><path class="fx_ekx88i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:video-off-20"} {...others} />);
}

export default Component;
