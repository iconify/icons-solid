import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5e-a9baq.css';
import '../../css/x/xigncxkgn.css';
import '../../css/v/v4lpm3r4t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5e-a9baq"/><path class="xigncxkgn"/><path class="v4lpm3r4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:help-book"} {...others} />);
}

export default Component;
