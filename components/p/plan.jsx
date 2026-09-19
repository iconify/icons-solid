import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/ljmw41jut.css';
import '../../css/t/tgf1jxbcb.css';
import '../../css/h/hz2zgmbpt.css';
import '../../css/h/hu_nuxbxh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwLFWJeod"><g class="rohhhzb0l"><path class="ljmw41jut"/><path class="tgf1jxbcb"/><path class="hz2zgmbpt"/><path class="hu_nuxbxh"/></g></mask></defs><path mask="url(#SVGwLFWJeod)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:plan"} {...others} />);
}

export default Component;
