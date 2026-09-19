import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nxl8u5bfk.css';
import '../../css/k/kon0fygmq.css';
import '../../css/l/lm3a1etge.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGm3OZHc6R"><g class="wwvp95byt"><path class="nxl8u5bfk"/><path class="kon0fygmq"/><circle class="lm3a1etge"/></g></mask></defs><path mask="url(#SVGm3OZHc6R)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:audio-file"} {...others} />);
}

export default Component;
