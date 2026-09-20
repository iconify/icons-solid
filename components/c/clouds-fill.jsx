import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x45fpk52i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x45fpk52i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:clouds-fill"} {...others} />);
}

export default Component;
