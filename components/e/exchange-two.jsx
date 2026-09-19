import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bco27yqdx.css';
import '../../css/d/dwfg7kbwe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCgko6bsd"><g class="wwvp95byt"><path class="bco27yqdx"/><path class="dwfg7kbwe"/></g></mask></defs><path mask="url(#SVGCgko6bsd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:exchange-two"} {...others} />);
}

export default Component;
