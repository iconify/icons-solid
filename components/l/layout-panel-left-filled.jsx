import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkj6lmbzm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bkj6lmbzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layout-panel-left-filled"} {...others} />);
}

export default Component;
