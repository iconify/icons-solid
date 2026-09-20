import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkafj-b4j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wkafj-b4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:surface-front-outline"} {...others} />);
}

export default Component;
