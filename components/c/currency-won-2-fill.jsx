import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_h5l6mzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t_h5l6mzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:currency-won-2-fill"} {...others} />);
}

export default Component;
