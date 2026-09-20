import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3ja3ib0p.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="u3ja3ib0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:inbox"} {...others} />);
}

export default Component;
