import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym_r_5nav.css';
import '../../css/o/o7sf9lkhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ym_r_5nav"/><path class="o7sf9lkhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:android-solid"} {...others} />);
}

export default Component;
