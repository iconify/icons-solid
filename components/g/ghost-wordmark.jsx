import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txt8bqbzk.css';
import '../../css/d/dbsyz0f1y.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="txt8bqbzk"/><path class="dbsyz0f1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ghost-wordmark"} {...others} />);
}

export default Component;
