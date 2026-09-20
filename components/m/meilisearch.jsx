import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5dh6hawh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k5dh6hawh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:meilisearch"} {...others} />);
}

export default Component;
