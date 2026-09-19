import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4v33c6ft.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="i4v33c6ft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:close-square-outline"} {...others} />);
}

export default Component;
