import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/d/dvcapvbcu.css';
import '../../css/n/n3y4iwy_t.css';
import '../../css/s/szdnrl1jv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEhaW4dLm"><g class="s9cl3zbei"><circle class="dvcapvbcu"/><path class="n3y4iwy_t"/><path class="szdnrl1jv"/></g></mask></defs><path mask="url(#SVGEhaW4dLm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:egg"} {...others} />);
}

export default Component;
