import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o055zpqmr.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="o055zpqmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:text-rotate-270-degrees"} {...others} />);
}

export default Component;
