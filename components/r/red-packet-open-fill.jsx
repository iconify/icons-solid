import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h55m34bjv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h55m34bjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:red-packet-open-fill"} {...others} />);
}

export default Component;
