import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx5jx9gaq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lx5jx9gaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:snyk"} {...others} />);
}

export default Component;
