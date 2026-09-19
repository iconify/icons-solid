import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue1jxo3mt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ue1jxo3mt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:database-filled"} {...others} />);
}

export default Component;
