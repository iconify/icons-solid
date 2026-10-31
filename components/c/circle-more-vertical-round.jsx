import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvy2xtale.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zvy2xtale"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-more-vertical-round"} {...others} />);
}

export default Component;
