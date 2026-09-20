import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb4h_tb7x.css';
import '../../css/e/eozwp4bxx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fb4h_tb7x"/><path class="eozwp4bxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:stop"} {...others} />);
}

export default Component;
