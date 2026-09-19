import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xd0085bqe.css';
import '../../css/y/y8nw6jm7n.css';
import '../../css/e/e5fqixblw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcz1FvvSg"><g class="rohhhzb0l"><path class="xd0085bqe"/><rect class="y8nw6jm7n"/><path class="e5fqixblw"/></g></mask></defs><path mask="url(#SVGcz1FvvSg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:computer"} {...others} />);
}

export default Component;
