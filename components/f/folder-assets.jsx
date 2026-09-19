import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roar_qb4z.css';
import '../../css/g/gtgu57bmb.css';
import '../../css/u/utvn67bmq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="roar_qb4z"/><path class="gtgu57bmb"/><path class="utvn67bmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-assets"} {...others} />);
}

export default Component;
