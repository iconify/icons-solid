import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/e6xwq7bwr.css';
import '../../css/s/sa6e5v3it.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5u6ebeaz"><g class="s9cl3zbei"><path clip-rule="evenodd" class="e6xwq7bwr"/><path class="sa6e5v3it"/></g></mask></defs><path mask="url(#SVG5u6ebeaz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:caution"} {...others} />);
}

export default Component;
