import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plrbxtq-q.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="plrbxtq-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:column-right-two-thirds-edit"} {...others} />);
}

export default Component;
