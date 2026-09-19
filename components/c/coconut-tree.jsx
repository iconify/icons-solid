import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/g/gx85gbbnh.css';
import '../../css/e/e5o8hlb3d.css';
import '../../css/z/znzfcwbhp.css';
import '../../css/l/lvfkzebln.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxpa09duy"><g class="hv130ab-t"><path class="gx85gbbnh"/><path class="e5o8hlb3d"/><path class="znzfcwbhp"/><path class="lvfkzebln"/></g></mask></defs><path mask="url(#SVGxpa09duy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:coconut-tree"} {...others} />);
}

export default Component;
