import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciqspz6bd.css';
import '../../css/v/v_ge03b8m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ciqspz6bd"/><path class="v_ge03b8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rule-partial"} {...others} />);
}

export default Component;
