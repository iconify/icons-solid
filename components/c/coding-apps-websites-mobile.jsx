import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu0_6bbna.css';
import '../../css/o/obz-b-bgc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pu0_6bbna"/><path class="obz-b-bgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-mobile"} {...others} />);
}

export default Component;
