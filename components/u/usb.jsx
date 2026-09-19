import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg9j1eb8x.css';
import '../../css/v/v71f_-age.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="vg9j1eb8x"/><path class="v71f_-age"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:usb"} {...others} />);
}

export default Component;
