import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud5ss4a1y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ud5ss4a1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:list-columns-reverse"} {...others} />);
}

export default Component;
