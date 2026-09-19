import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/v0dofs9fn.css';
import '../../css/h/hpluv7gvx.css';
import '../../css/w/wvkle8b0a.css';
import '../../css/i/i1qkqjmcg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGBoFQb9z"><g class="s9cl3zbei"><path class="v0dofs9fn"/><path class="hpluv7gvx"/><path class="wvkle8b0a"/><path class="i1qkqjmcg"/></g></mask></defs><path mask="url(#SVGGBoFQb9z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:general-branch"} {...others} />);
}

export default Component;
