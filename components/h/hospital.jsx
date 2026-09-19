import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/o/o3z6e4byv.css';
import '../../css/m/mo-ovh0xf.css';
import '../../css/w/wk9hsib2c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsY4msekX"><g class="s9cl3zbei"><path class="o3z6e4byv"/><path class="mo-ovh0xf"/><path class="wk9hsib2c"/></g></mask></defs><path mask="url(#SVGsY4msekX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hospital"} {...others} />);
}

export default Component;
