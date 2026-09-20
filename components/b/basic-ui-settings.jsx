import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew__pnb5s.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ew__pnb5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-settings"} {...others} />);
}

export default Component;
