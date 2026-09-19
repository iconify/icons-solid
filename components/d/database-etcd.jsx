import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdqj4ciwj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tdqj4ciwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:database-etcd"} {...others} />);
}

export default Component;
