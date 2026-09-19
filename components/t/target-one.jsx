import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/horpi928m.css';
import '../../css/f/fwlwgzfat.css';
import '../../css/u/udpwpkf8i.css';
import '../../css/h/hq4svlbqs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGw1dXGdOO"><g class="ft5dv1b6b"><path class="horpi928m"/><path class="fwlwgzfat"/><path class="udpwpkf8i"/><path class="hq4svlbqs"/></g></mask></defs><path mask="url(#SVGw1dXGdOO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:target-one"} {...others} />);
}

export default Component;
