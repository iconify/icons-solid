import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b89uwe67v.css';
import '../../css/r/rdyolcbjo.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="b89uwe67v"/><path class="rdyolcbjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:alert-twotone"} {...others} />);
}

export default Component;
