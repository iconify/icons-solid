import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xomsf6buj.css';
import '../../css/o/o7jf5lv9i.css';
import '../../css/j/jtfx71bvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xomsf6buj"/><path clip-rule="evenodd" class="o7jf5lv9i"/><path class="jtfx71bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:credit-card-x-filled"} {...others} />);
}

export default Component;
