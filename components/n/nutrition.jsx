import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/x9r6a0jbb.css';
import '../../css/v/vumyzz4sm.css';
import '../../css/l/lk_u-7b4b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUEmD5d0o"><g class="s9cl3zbei"><path clip-rule="evenodd" class="x9r6a0jbb"/><path class="vumyzz4sm"/><path class="lk_u-7b4b"/></g></mask></defs><path mask="url(#SVGUEmD5d0o)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:nutrition"} {...others} />);
}

export default Component;
