import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a91t2_tvg.css';

const viewBox = {"width":800,"height":850};
const content = `<path class="a91t2_tvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:dropbox"} {...others} />);
}

export default Component;
