import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmpy0gb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kmpy0gb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-dashed-solid"} {...others} />);
}

export default Component;
