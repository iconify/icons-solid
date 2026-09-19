import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m48pxccbl.css';
import '../../css/f/fuwxw7uog.css';
import '../../css/e/ejl28tb4a.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="m48pxccbl"/><path class="fuwxw7uog"/><path class="ejl28tb4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:folder-view-outlined"} {...others} />);
}

export default Component;
