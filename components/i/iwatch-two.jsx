import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rx1fmmb4e.css';
import '../../css/a/av6_10b3t.css';
import '../../css/c/c47he4bkm.css';
import '../../css/t/tpcw__b_a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmGxKscVs"><g class="ft5dv1b6b"><path class="rx1fmmb4e"/><rect class="av6_10b3t"/><rect transform="rotate(90 13 18)" class="c47he4bkm"/><rect transform="rotate(90 13 25)" class="tpcw__b_a"/></g></mask></defs><path mask="url(#SVGmGxKscVs)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:iwatch-two"} {...others} />);
}

export default Component;
