import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8ucuebqy.css';
import '../../css/t/t-aq49b1f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x8ucuebqy"/><path class="t-aq49b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:edit-filter"} {...others} />);
}

export default Component;
