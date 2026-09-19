import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/h/hrcmblb0d.css';
import '../../css/q/qshv2gqkc.css';
import '../../css/k/kewv3zbqz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG42lgieqI"><g class="s9cl3zbei"><path clip-rule="evenodd" class="hrcmblb0d"/><path class="qshv2gqkc"/><path class="kewv3zbqz"/></g></mask></defs><path mask="url(#SVG42lgieqI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:traditional-chinese-medicine"} {...others} />);
}

export default Component;
