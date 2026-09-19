import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bramihlnm.css';
import '../../css/w/wpxuws29w.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="bramihlnm"/><path class="wpxuws29w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:edit-twotone"} {...others} />);
}

export default Component;
