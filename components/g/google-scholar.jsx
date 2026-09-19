import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p35pwcbqq.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="p35pwcbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:google-scholar"} {...others} />);
}

export default Component;
