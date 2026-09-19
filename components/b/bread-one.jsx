import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/lredrxbap.css';
import '../../css/y/yj5d788he.css';
import '../../css/t/tzbwa-2uv.css';
import '../../css/h/hvu07gbor.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGD4UDFBDh"><g class="wwvp95byt"><path class="lredrxbap"/><path class="yj5d788he"/><path class="tzbwa-2uv"/><path class="hvu07gbor"/></g></mask></defs><path mask="url(#SVGD4UDFBDh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bread-one"} {...others} />);
}

export default Component;
