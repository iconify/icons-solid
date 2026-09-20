import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgb68_bgo.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="lgb68_bgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:devices-laptop"} {...others} />);
}

export default Component;
