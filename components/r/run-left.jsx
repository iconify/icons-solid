import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/c/cej2n11nh.css';
import '../../css/e/ew-ul4bil.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3ukmNEga"><g class="wwvp95byt"><path class="cej2n11nh"/><path class="ew-ul4bil"/></g></mask></defs><path mask="url(#SVG3ukmNEga)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:run-left"} {...others} />);
}

export default Component;
