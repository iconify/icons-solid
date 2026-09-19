import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlv67-bal.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wlv67-bal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:handset"} {...others} />);
}

export default Component;
