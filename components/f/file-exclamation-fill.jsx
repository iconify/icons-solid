import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azei6ab0l.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="azei6ab0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-exclamation-fill"} {...others} />);
}

export default Component;
