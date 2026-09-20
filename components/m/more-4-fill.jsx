import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a20z3n5cu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a20z3n5cu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:more-4-fill"} {...others} />);
}

export default Component;
