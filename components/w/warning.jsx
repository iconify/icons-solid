import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iio3flbyw.css';
import '../../css/u/u3637ccul.css';
import '../../css/r/rc8bmi5tc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iio3flbyw"/><circle class="u3637ccul"/><path class="rc8bmi5tc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:warning"} {...others} />);
}

export default Component;
