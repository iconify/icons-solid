import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o22u0m-kw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="o22u0m-kw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:arrow-right"} {...others} />);
}

export default Component;
