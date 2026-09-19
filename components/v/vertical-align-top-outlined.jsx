import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q34wt5ikc.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="q34wt5ikc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:vertical-align-top-outlined"} {...others} />);
}

export default Component;
