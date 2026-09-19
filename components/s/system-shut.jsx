import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imrr2wcsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="imrr2wcsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:system-shut"} {...others} />);
}

export default Component;
