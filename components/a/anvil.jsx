import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc2cz1enc.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="rc2cz1enc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:anvil"} {...others} />);
}

export default Component;
