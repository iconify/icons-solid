import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy0ljfbis.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yy0ljfbis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:lightning-charge-fill"} {...others} />);
}

export default Component;
