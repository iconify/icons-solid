import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8x9wd4ds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r8x9wd4ds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:meilisearch"} {...others} />);
}

export default Component;
