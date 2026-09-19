import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/af1ozmbkx.css';
import '../../css/n/n6g8ofb5v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkTn81dxT"><g class="s9cl3zbei"><rect class="af1ozmbkx"/><path class="n6g8ofb5v"/></g></mask></defs><path mask="url(#SVGkTn81dxT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:ipad-one"} {...others} />);
}

export default Component;
