import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4ob6t.css';
import '../../css/s/so-from-10.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4ob6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chevron-small-right"} {...others} />);
}

export default Component;
