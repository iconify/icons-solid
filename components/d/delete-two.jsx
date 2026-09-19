import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/b55bfubsx.css';
import '../../css/i/itkqv0bnq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDJbpMdSq"><g class="aql7dnt-u"><path class="b55bfubsx"/><path class="itkqv0bnq"/></g></mask></defs><path mask="url(#SVGDJbpMdSq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:delete-two"} {...others} />);
}

export default Component;
