import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg8w7gxvo.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="eg8w7gxvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:database-check-remix"} {...others} />);
}

export default Component;
