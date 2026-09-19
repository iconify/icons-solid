import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl9ltt5qx.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="zl9ltt5qx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:bars-ascending-align-left-arrow-up"} {...others} />);
}

export default Component;
