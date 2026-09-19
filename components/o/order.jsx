import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/m/ma89ezbjd.css';
import '../../css/o/o90zhsb-g.css';
import '../../css/y/ybo_y_3hp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBCyq8bMu"><g class="ufeehvblu"><path class="ma89ezbjd"/><path class="o90zhsb-g"/><path class="ybo_y_3hp"/></g></mask></defs><path mask="url(#SVGBCyq8bMu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:order"} {...others} />);
}

export default Component;
