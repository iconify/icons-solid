import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/y/ywe80ac4w.css';
import '../../css/v/vo256e1ok.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXq278c7d"><g class="wwvp95byt"><rect class="g47cb4b4t"/><path class="ywe80ac4w"/><path class="vo256e1ok"/></g></mask></defs><path mask="url(#SVGXq278c7d)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:fill"} {...others} />);
}

export default Component;
