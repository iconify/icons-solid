import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncl2nwb0w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ncl2nwb0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:anvil-and-mallet"} {...others} />);
}

export default Component;
