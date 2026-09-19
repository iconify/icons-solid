import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbs71wbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kbs71wbyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:share-ios"} {...others} />);
}

export default Component;
