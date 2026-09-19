import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/t/txwygjb8d.css';
import '../../css/w/wyahbkbgb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXSFC601V"><g class="ufeehvblu"><path class="txwygjb8d"/><path class="wyahbkbgb"/></g></mask></defs><path mask="url(#SVGXSFC601V)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:config"} {...others} />);
}

export default Component;
