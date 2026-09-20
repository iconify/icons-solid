import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okx2ihb9t.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="okx2ihb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-button-to-right-arrow-line-to-right"} {...others} />);
}

export default Component;
