import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug26ubb6t.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ug26ubb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:gold-remix"} {...others} />);
}

export default Component;
