import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh0yo7t6f.css';
import '../../css/w/w2yyvybiu.css';
import '../../css/g/g229fc2zp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2UEwHd1v"><g class="ft5dv1b6b"><path class="sh0yo7t6f"/><path class="w2yyvybiu"/><path class="g229fc2zp"/></g></mask></defs><path mask="url(#SVG2UEwHd1v)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:doc-search"} {...others} />);
}

export default Component;
