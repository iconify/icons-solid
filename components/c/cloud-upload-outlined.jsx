import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elmx5rbsv.css';
import '../../css/w/w893w9fet.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="elmx5rbsv"/><path class="w893w9fet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:cloud-upload-outlined"} {...others} />);
}

export default Component;
