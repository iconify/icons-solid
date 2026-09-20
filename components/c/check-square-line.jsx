import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjv_7_bqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vjv_7_bqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:check-square-line"} {...others} />);
}

export default Component;
