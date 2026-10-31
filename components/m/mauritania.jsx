import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et0_83b0k.css';
import '../../css/w/wawpwqbwh.css';
import '../../css/u/u6_qs6b9x.css';
import '../../css/p/p2li0lb-t.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="et0_83b0k"/><path class="wawpwqbwh"/><path class="u6_qs6b9x"/><path class="p2li0lb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:mauritania"} {...others} />);
}

export default Component;
