import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd99cys7x.css';
import '../../css/y/y00wue9pd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kd99cys7x"/><path class="y00wue9pd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plane-2-bold"} {...others} />);
}

export default Component;
