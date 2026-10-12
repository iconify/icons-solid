import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvnvmob9i.css';
import '../../css/u/u769r-biz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvnvmob9i"/><path clip-rule="evenodd" class="u769r-biz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mouse-off-filled"} {...others} />);
}

export default Component;
