import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw461ib2w.css';
import '../../css/p/p5et4nbmo.css';
import '../../css/b/buwuemb7q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw461ib2w"/><circle class="p5et4nbmo"/><circle class="buwuemb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:tabs-rtl"} {...others} />);
}

export default Component;
