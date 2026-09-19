import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gik1z9cpy.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gik1z9cpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:ellipsis-outlined"} {...others} />);
}

export default Component;
