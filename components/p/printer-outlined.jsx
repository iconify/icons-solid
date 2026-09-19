import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6xu7ib6r.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="c6xu7ib6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:printer-outlined"} {...others} />);
}

export default Component;
