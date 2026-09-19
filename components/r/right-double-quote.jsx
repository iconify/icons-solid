import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpj6p9orf.css';

const viewBox = {"width":875,"height":2048};
const content = `<path class="tpj6p9orf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:right-double-quote"} {...others} />);
}

export default Component;
