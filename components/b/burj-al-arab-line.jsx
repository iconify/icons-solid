import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz18w6tjv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zz18w6tjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:burj-al-arab-line"} {...others} />);
}

export default Component;
