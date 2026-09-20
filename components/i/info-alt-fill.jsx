import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjph0ebny.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zjph0ebny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:info-alt-fill"} {...others} />);
}

export default Component;
