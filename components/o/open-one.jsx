import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mf4kxbb7i.css';
import '../../css/q/qp5l2y6-o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzIoW9KLC"><g class="aql7dnt-u"><path class="mf4kxbb7i"/><circle class="qp5l2y6-o"/></g></mask></defs><path mask="url(#SVGzIoW9KLC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:open-one"} {...others} />);
}

export default Component;
