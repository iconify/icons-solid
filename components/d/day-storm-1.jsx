import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/r/r5gdt20zo.css';
import '../../css/y/ysj0g4nkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="r5gdt20zo"/><path class="ysj0g4nkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:day-storm-1"} {...others} />);
}

export default Component;
