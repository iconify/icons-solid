import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a929an8zc.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="a929an8zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:left-circle-fill"} {...others} />);
}

export default Component;
