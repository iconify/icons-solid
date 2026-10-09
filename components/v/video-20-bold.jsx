import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-rlecbga.css';
import '../../css/g/gj8v89bch.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r-rlecbga"/><path class="gj8v89bch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:video-20-bold"} {...others} />);
}

export default Component;
