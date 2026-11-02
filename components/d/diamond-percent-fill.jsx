import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z45dbqb9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z45dbqb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:diamond-percent-fill"} {...others} />);
}

export default Component;
