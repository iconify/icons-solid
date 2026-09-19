import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gaiu7u7ew.css';
import '../../css/l/lh649k1wk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gaiu7u7ew"/><path class="lh649k1wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:phone-in-outline"} {...others} />);
}

export default Component;
