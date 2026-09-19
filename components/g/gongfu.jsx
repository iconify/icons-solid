import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/s3-qddb4s.css';
import '../../css/f/f62cqfb1v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZ1mo6cLV"><g class="rohhhzb0l"><circle class="s3-qddb4s"/><path class="f62cqfb1v"/></g></mask></defs><path mask="url(#SVGZ1mo6cLV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gongfu"} {...others} />);
}

export default Component;
