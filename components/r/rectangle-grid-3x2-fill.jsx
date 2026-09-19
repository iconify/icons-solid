import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0a7ymb4j.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="z0a7ymb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:rectangle-grid-3x2-fill"} {...others} />);
}

export default Component;
