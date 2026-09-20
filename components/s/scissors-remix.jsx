import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dto5m8b2c.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="dto5m8b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:scissors-remix"} {...others} />);
}

export default Component;
