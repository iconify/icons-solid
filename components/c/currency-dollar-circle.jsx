import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jm48-6mzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jm48-6mzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:currency-dollar-circle"} {...others} />);
}

export default Component;
