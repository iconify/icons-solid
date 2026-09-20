import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p799onbqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p799onbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:printer-point-of-sale-edit-outline"} {...others} />);
}

export default Component;
