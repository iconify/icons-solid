import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyi6f9bda.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="uyi6f9bda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-sync-outlined"} {...others} />);
}

export default Component;
