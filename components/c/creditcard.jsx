import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgo4n8spf.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="dgo4n8spf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:creditcard"} {...others} />);
}

export default Component;
