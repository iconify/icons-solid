import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwna3ebpo.css';
import '../../css/v/vfiksfbii.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="cwna3ebpo"/><path class="vfiksfbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:translation-outlined"} {...others} />);
}

export default Component;
