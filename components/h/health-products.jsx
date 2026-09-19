import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/ybvz-7b8t.css';
import '../../css/d/dt1v414uk.css';
import '../../css/g/gqzk3x96x.css';
import '../../css/t/t7ty-wb8u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuf0tecPi"><g class="wwvp95byt"><path class="ybvz-7b8t"/><path class="dt1v414uk"/><path class="gqzk3x96x"/><circle class="t7ty-wb8u"/></g></mask></defs><path mask="url(#SVGuf0tecPi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:health-products"} {...others} />);
}

export default Component;
