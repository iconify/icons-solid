import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcq57kfry.css';
import '../../css/b/b26cuwy7g.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="wcq57kfry"/><path class="b26cuwy7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:phone-twotone"} {...others} />);
}

export default Component;
