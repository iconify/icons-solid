import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-4so2v2c.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="x-4so2v2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:shoppingbag"} {...others} />);
}

export default Component;
