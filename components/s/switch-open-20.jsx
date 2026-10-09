import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v44e49byk.css';
import '../../css/a/aw5adu44q.css';
import '../../css/c/ct5hu_u7h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v44e49byk"/><path class="aw5adu44q"/><path class="ct5hu_u7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:switch-open-20"} {...others} />);
}

export default Component;
