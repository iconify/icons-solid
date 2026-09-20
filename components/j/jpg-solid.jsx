import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnuh6xh8p.css';
import '../../css/n/nolroo2wn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vnuh6xh8p"/><path clip-rule="evenodd" class="nolroo2wn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:jpg-solid"} {...others} />);
}

export default Component;
