import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc82deb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uc82deb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:calendar-download-fill"} {...others} />);
}

export default Component;
