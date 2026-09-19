import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nne_osbxz.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="nne_osbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:save-outline"} {...others} />);
}

export default Component;
