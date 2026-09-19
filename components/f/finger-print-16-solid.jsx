import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af2n3wb9q.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="af2n3wb9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:finger-print-16-solid"} {...others} />);
}

export default Component;
