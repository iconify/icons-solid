import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfbh3cbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cfbh3cbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stroke-bottom"} {...others} />);
}

export default Component;
