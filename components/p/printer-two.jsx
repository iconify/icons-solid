import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xsydfnbew.css';
import '../../css/o/o39sc1brf.css';
import '../../css/f/f5zx67bhh.css';
import '../../css/d/d-jqf1bjs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbg6Xjesu"><g class="rohhhzb0l"><path class="xsydfnbew"/><rect class="o39sc1brf"/><path class="f5zx67bhh"/><path class="d-jqf1bjs"/></g></mask></defs><path mask="url(#SVGbg6Xjesu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:printer-two"} {...others} />);
}

export default Component;
