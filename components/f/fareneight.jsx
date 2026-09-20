import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su-chh5bp.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="su-chh5bp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:fareneight"} {...others} />);
}

export default Component;
