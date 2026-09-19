import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h05gu1dch.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="h05gu1dch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:html5-outline"} {...others} />);
}

export default Component;
