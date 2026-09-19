import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/m/m20g3cc2r.css';
import '../../css/x/xaw6owbro.css';
import '../../css/r/rc-csdbiw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgbZzDbbO"><g class="wwvp95byt"><path class="m20g3cc2r"/><rect transform="rotate(-45 5.071 33.071)" class="xaw6owbro"/><path class="rc-csdbiw"/></g></mask></defs><path mask="url(#SVGgbZzDbbO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sandwich-one"} {...others} />);
}

export default Component;
