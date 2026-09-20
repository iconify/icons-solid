import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbb8jab7i.css';
import '../../css/l/ldmh8bwhv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rbb8jab7i"/><path class="ldmh8bwhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-alt-solid"} {...others} />);
}

export default Component;
