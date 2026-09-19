import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6r8n0old.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z6r8n0old"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:arrow-down-square-fill"} {...others} />);
}

export default Component;
