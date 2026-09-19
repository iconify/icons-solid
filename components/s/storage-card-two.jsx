import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/w/wiah3db5h.css';
import '../../css/q/q4b4fq76m.css';
import '../../css/j/j2bnel5xz.css';
import '../../css/s/srjtb2b8l.css';
import '../../css/t/t-hikcb2l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFbYCpcUB"><g class="s9cl3zbei"><rect class="wiah3db5h"/><path class="q4b4fq76m"/><path class="j2bnel5xz"/><path class="srjtb2b8l"/><path class="t-hikcb2l"/></g></mask></defs><path mask="url(#SVGFbYCpcUB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:storage-card-two"} {...others} />);
}

export default Component;
