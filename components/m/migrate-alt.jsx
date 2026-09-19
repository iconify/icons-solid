import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrw6p6brg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jrw6p6brg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:migrate-alt"} {...others} />);
}

export default Component;
