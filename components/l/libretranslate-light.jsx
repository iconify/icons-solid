import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb8yt5fzg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qb8yt5fzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:libretranslate-light"} {...others} />);
}

export default Component;
