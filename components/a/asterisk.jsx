import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3o6v3kfg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a3o6v3kfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:asterisk"} {...others} />);
}

export default Component;
