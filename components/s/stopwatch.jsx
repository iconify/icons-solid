import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/r/r5tlskk2v.css';
import '../../css/e/el5co48gm.css';
import '../../css/q/qk9ee1x_u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRMaSpcHZ"><g class="ufeehvblu"><path class="r5tlskk2v"/><path class="el5co48gm"/><path class="qk9ee1x_u"/></g></mask></defs><path mask="url(#SVGRMaSpcHZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:stopwatch"} {...others} />);
}

export default Component;
