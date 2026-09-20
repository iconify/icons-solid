import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi28l3syr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="bi28l3syr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-button-to-bottom-arrow-down-line-to-bottom"} {...others} />);
}

export default Component;
