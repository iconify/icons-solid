import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh96-wwdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bh96-wwdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:blessing-fill"} {...others} />);
}

export default Component;
