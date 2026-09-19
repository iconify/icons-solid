import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s310mjyrf.css';
import '../../css/p/pvkzb2byg.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="s310mjyrf"/><path class="pvkzb2byg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:folder-twotone"} {...others} />);
}

export default Component;
