import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/i/iquwcyt8f.css';
import '../../css/d/d3sptcc3n.css';
import '../../css/d/dcn00fqin.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkG8fWc7K"><g class="s9cl3zbei"><path class="iquwcyt8f"/><path class="d3sptcc3n"/><path class="dcn00fqin"/></g></mask></defs><path mask="url(#SVGkG8fWc7K)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:iwatch"} {...others} />);
}

export default Component;
