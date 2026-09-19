import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by5xilmjq.css';
import '../../css/t/t6wz8cb3t.css';
import '../../css/a/aozro6bou.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="by5xilmjq"/><circle class="t6wz8cb3t"/><circle class="aozro6bou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:ellipsis-filled"} {...others} />);
}

export default Component;
