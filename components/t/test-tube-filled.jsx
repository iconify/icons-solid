import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bapy_ccxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bapy_ccxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:test-tube-filled"} {...others} />);
}

export default Component;
