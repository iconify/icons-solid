import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb7byjbii.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lb7byjbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:vending-machine-with-drink-cup-with-steam"} {...others} />);
}

export default Component;
