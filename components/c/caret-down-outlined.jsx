import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtat75bif.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="vtat75bif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:caret-down-outlined"} {...others} />);
}

export default Component;
