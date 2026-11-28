import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv8lb0fxq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qv8lb0fxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:snowflake-solid"} {...others} />);
}

export default Component;
