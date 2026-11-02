import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjat3tp7i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zjat3tp7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:red-packet-fill"} {...others} />);
}

export default Component;
