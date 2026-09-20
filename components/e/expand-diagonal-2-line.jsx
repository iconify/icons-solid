import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlls_m23z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tlls_m23z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:expand-diagonal-2-line"} {...others} />);
}

export default Component;
