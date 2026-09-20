import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re-9-t6rq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="re-9-t6rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:meilisearch-light"} {...others} />);
}

export default Component;
