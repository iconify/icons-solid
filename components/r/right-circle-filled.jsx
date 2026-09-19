import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofj_3-bmn.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ofj_3-bmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:right-circle-filled"} {...others} />);
}

export default Component;
