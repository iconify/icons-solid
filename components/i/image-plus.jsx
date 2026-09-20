import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4j-itpzn.css';
import '../../css/w/wch9wu0eu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4j-itpzn"/><path class="wch9wu0eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-plus"} {...others} />);
}

export default Component;
