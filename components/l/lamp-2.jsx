import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e64hjobsd.css';
import '../../css/k/knrrbxbjz.css';
import '../../css/p/pbkjaxmeu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer e64hjobsd"/><path class="duoicon-secondary-layer knrrbxbjz"/><path class="duoicon-primary-layer pbkjaxmeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:lamp-2"} {...others} />);
}

export default Component;
