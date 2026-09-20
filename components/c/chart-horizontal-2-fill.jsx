import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hswj1gb4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hswj1gb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chart-horizontal-2-fill"} {...others} />);
}

export default Component;
