import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/i/isa-krbuv.css';
import '../../css/c/cbfu_ebav.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5lr6Heij"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="isa-krbuv"/><path class="cbfu_ebav"/></g></mask></defs><path mask="url(#SVG5lr6Heij)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:messages"} {...others} />);
}

export default Component;
