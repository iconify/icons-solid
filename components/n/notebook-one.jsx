import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cdrd5ybzk.css';
import '../../css/b/bypdwpb_f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGshJT0cSA"><g class="v3_i3wktz"><path class="cdrd5ybzk"/><path class="bypdwpb_f"/></g></mask></defs><path mask="url(#SVGshJT0cSA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:notebook-one"} {...others} />);
}

export default Component;
