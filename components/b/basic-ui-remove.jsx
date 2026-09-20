import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7_udfb7x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c7_udfb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-remove"} {...others} />);
}

export default Component;
