import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/g/g2i9eacyj.css';
import '../../css/e/e6x_lacct.css';
import '../../css/r/r0e0--btz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="g2i9eacyj"/><path class="e6x_lacct"/><path class="r0e0--btz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-illustrator-logo"} {...others} />);
}

export default Component;
