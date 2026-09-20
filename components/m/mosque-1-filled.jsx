import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyslze34c.css';
import '../../css/t/tx0pfq7pv.css';
import '../../css/o/obcwls8yd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eyslze34c"/><path class="tx0pfq7pv"/><path class="obcwls8yd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mosque-1-filled"} {...others} />);
}

export default Component;
