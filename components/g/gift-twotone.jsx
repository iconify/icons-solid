import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/np8ilvg5i.css';
import '../../css/s/s9zx-k-iw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="np8ilvg5i"/><path class="s9zx-k-iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:gift-twotone"} {...others} />);
}

export default Component;
