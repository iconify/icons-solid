import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/u/uqqqq-ifh.css';
import '../../css/b/b-tt1pblw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGA76BUfcL"><g class="s9cl3zbei"><rect class="g47cb4b4t"/><path class="uqqqq-ifh"/><path class="b-tt1pblw"/></g></mask></defs><path mask="url(#SVGA76BUfcL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:powerpoint"} {...others} />);
}

export default Component;
