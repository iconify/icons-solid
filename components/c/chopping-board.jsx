import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ud93edw7f.css';
import '../../css/w/wj3tatb_p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZBqRGbWG"><g class="wwvp95byt"><path class="ud93edw7f"/><path class="wj3tatb_p"/></g></mask></defs><path mask="url(#SVGZBqRGbWG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chopping-board"} {...others} />);
}

export default Component;
