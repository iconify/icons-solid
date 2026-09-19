import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/eunooc4xb.css';
import '../../css/e/euiaxmb0w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfkb5ZcfK"><g class="s9cl3zbei"><path clip-rule="evenodd" class="eunooc4xb"/><path class="euiaxmb0w"/></g></mask></defs><path mask="url(#SVGfkb5ZcfK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:teeth"} {...others} />);
}

export default Component;
