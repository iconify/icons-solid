import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kn969ul5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kn969ul5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:trumpet-24"} {...others} />);
}

export default Component;
