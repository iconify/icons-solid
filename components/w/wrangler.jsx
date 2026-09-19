import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmab-___r.css';
import '../../css/e/emuyr7bck.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dmab-___r"/><path class="emuyr7bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:wrangler"} {...others} />);
}

export default Component;
