import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/m/m0k58sx-f.css';
import '../../css/p/p3l09fb9z.css';
import '../../css/x/xke-lac5i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgiedfeFn"><g class="wwvp95byt"><path class="m0k58sx-f"/><path class="p3l09fb9z"/><path class="xke-lac5i"/></g></mask></defs><path mask="url(#SVGgiedfeFn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:avocado-one"} {...others} />);
}

export default Component;
