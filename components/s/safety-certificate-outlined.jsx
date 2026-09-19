import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi33acb7x.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="hi33acb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:safety-certificate-outlined"} {...others} />);
}

export default Component;
