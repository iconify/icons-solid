import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7uw_y9fk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h7uw_y9fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:classify-ai-fill"} {...others} />);
}

export default Component;
