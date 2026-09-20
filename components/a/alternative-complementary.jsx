import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4u4mbc3g.css';

const viewBox = {"width":65,"height":64};
const content = `<path class="q4u4mbc3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:alternative-complementary"} {...others} />);
}

export default Component;
