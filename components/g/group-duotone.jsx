import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngqilitfx.css';
import '../../css/a/a1eunccfe.css';
import '../../css/h/hjqg24c6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ngqilitfx"/><path class="a1eunccfe"/><path class="hjqg24c6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:group-duotone"} {...others} />);
}

export default Component;
