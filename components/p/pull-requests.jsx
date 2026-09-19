import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/ujmxbfbzu.css';
import '../../css/q/qna-m1b4k.css';
import '../../css/u/ucg8mrbfd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeDLA7bNQ"><g class="v3_i3wktz"><path class="ujmxbfbzu"/><path class="qna-m1b4k"/><path class="ucg8mrbfd"/></g></mask></defs><path mask="url(#SVGeDLA7bNQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pull-requests"} {...others} />);
}

export default Component;
