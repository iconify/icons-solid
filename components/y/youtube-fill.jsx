import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctk7unbgm.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ctk7unbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:youtube-fill"} {...others} />);
}

export default Component;
