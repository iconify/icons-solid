import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/y/y1v54k0xv.css';
import '../../css/e/e1ag5zbac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="y1v54k0xv"/><path class="e1ag5zbac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-scale-4"} {...others} />);
}

export default Component;
