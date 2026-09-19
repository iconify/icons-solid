import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzw3f80ad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzw3f80ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:share-1-light"} {...others} />);
}

export default Component;
