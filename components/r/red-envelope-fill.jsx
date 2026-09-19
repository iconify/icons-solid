import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc02u_bde.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gc02u_bde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:red-envelope-fill"} {...others} />);
}

export default Component;
