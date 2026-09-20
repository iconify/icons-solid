import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2g4ygt8c.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="c2g4ygt8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:direction-left"} {...others} />);
}

export default Component;
