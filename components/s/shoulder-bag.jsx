import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/s97k9jbuz.css';
import '../../css/f/f494clbor.css';
import '../../css/z/zavgbblcj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHffbrdPP"><g class="rohhhzb0l"><path class="s97k9jbuz"/><path class="f494clbor"/><circle class="zavgbblcj"/></g></mask></defs><path mask="url(#SVGHffbrdPP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shoulder-bag"} {...others} />);
}

export default Component;
