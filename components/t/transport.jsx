import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/k/k87xdfbfj.css';
import '../../css/v/v8g1xozen.css';
import '../../css/w/w4vhh3s5s.css';
import '../../css/e/etmqncjox.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcWmdtcgB"><g class="s9cl3zbei"><rect class="k87xdfbfj"/><path class="v8g1xozen"/><path class="w4vhh3s5s"/><path class="etmqncjox"/></g></mask></defs><path mask="url(#SVGcWmdtcgB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:transport"} {...others} />);
}

export default Component;
