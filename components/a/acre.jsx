import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbg83l2tt.css';

const viewBox = {"width":444,"height":512};
const content = `<path clip-rule="evenodd" class="nbg83l2tt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:acre"} {...others} />);
}

export default Component;
