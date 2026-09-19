import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guq9ui5hr.css';

const viewBox = {"width":832,"height":1024};
const content = `<path class="guq9ui5hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:coffeecupalt"} {...others} />);
}

export default Component;
