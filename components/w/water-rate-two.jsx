import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ux3vkrb2f.css';
import '../../css/z/zs3kp5bcb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlE2NyucQ"><g class="wwvp95byt"><path clip-rule="evenodd" class="ux3vkrb2f"/><path class="zs3kp5bcb"/></g></mask></defs><path mask="url(#SVGlE2NyucQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:water-rate-two"} {...others} />);
}

export default Component;
