import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs_bt_-6o.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="xs_bt_-6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:shield-keyhole"} {...others} />);
}

export default Component;
