import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ue2pxfmqa.css';
import '../../css/t/tqpdnhbhv.css';
import '../../css/h/h3ta2nbht.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqnNeNdqQ"><g class="wwvp95byt"><path class="ue2pxfmqa"/><path class="tqpdnhbhv"/><path class="h3ta2nbht"/></g></mask></defs><path mask="url(#SVGqnNeNdqQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:diamonds"} {...others} />);
}

export default Component;
