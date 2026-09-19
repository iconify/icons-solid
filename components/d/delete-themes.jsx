import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/zdy6akj0d.css';
import '../../css/s/s3hkxbb6p.css';
import '../../css/s/s19sxdqbo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlEjTBP1C"><g class="s9cl3zbei"><path clip-rule="evenodd" class="zdy6akj0d"/><path class="s3hkxbb6p"/><path class="s19sxdqbo"/></g></mask></defs><path mask="url(#SVGlEjTBP1C)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:delete-themes"} {...others} />);
}

export default Component;
