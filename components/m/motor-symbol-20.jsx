import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9xdadbxa.css';
import '../../css/z/zzudz-b7q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v9xdadbxa"/><path class="zzudz-b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:motor-symbol-20"} {...others} />);
}

export default Component;
