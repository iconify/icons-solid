import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/t45w3cbwe.css';
import '../../css/f/fpx-00njb.css';
import '../../css/p/ps_jx5b8q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG06LOWdxz"><g class="s9cl3zbei"><path class="t45w3cbwe"/><circle class="fpx-00njb"/><circle class="ps_jx5b8q"/></g></mask></defs><path mask="url(#SVG06LOWdxz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:medal-one"} {...others} />);
}

export default Component;
