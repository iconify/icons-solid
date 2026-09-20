import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4uh-95df.css';
import '../../css/b/bh93e5uni.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4uh-95df"/><path class="bh93e5uni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:download-alt"} {...others} />);
}

export default Component;
