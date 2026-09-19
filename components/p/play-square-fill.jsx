import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx80fdgqt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="xx80fdgqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:play-square-fill"} {...others} />);
}

export default Component;
