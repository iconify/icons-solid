import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfo1k5b-e.css';
import '../../css/i/iqt8i0b1i.css';

const viewBox = {"width":16,"height":14};
const content = `<path class="sfo1k5b-e"/><path class="iqt8i0b1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:discover"} {...others} />);
}

export default Component;
