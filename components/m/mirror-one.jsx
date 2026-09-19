import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/sfltb2brf.css';
import '../../css/a/a10evxbfq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIiREeetT"><g class="rohhhzb0l"><circle class="sfltb2brf"/><path class="a10evxbfq"/></g></mask></defs><path mask="url(#SVGIiREeetT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mirror-one"} {...others} />);
}

export default Component;
