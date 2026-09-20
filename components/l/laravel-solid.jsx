import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ems_ytbdz.css';
import '../../css/x/xwn1thb9y.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ems_ytbdz"/><path clip-rule="evenodd" class="xwn1thb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:laravel-solid"} {...others} />);
}

export default Component;
