import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-2-zob9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-2-zob9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:account-box-edit-outline"} {...others} />);
}

export default Component;
