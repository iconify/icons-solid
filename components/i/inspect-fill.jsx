import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv15p9qut.css';
import '../../css/t/tytb7gbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yv15p9qut"/><path class="tytb7gbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:inspect-fill"} {...others} />);
}

export default Component;
