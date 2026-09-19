import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exqw53b-w.css';
import '../../css/v/v2qi5lg1p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="exqw53b-w"/><path class="v2qi5lg1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:timer"} {...others} />);
}

export default Component;
