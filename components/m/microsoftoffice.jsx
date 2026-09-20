import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hos4-7jae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hos4-7jae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:microsoftoffice"} {...others} />);
}

export default Component;
