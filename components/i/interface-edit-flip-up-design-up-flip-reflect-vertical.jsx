import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns1pa3bol.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ns1pa3bol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-flip-up-design-up-flip-reflect-vertical"} {...others} />);
}

export default Component;
