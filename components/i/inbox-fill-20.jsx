import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn3tamb9f.css';
import '../../css/a/a9b7zrdqe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vn3tamb9f"/><path class="a9b7zrdqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:inbox-fill-20"} {...others} />);
}

export default Component;
