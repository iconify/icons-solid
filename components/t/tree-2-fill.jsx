import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng0cel71x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ng0cel71x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:tree-2-fill"} {...others} />);
}

export default Component;
