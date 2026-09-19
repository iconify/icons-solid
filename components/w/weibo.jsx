import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-zy4fbdl.css';
import '../../css/e/ezgn372ii.css';
import '../../css/f/f448ez1yz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGe29Xbbzw"><g class="ft5dv1b6b"><path class="w-zy4fbdl"/><path class="ezgn372ii"/><path class="f448ez1yz"/></g></mask></defs><path mask="url(#SVGe29Xbbzw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:weibo"} {...others} />);
}

export default Component;
