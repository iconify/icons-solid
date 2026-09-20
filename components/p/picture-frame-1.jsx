import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/o/o6jw4gbeq.css';
import '../../css/q/q7_poyshi.css';
import '../../css/i/i02asrbug.css';
import '../../css/g/gfcuh4bqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="o6jw4gbeq"/><path class="q7_poyshi"/><path class="i02asrbug"/><path class="gfcuh4bqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:picture-frame-1"} {...others} />);
}

export default Component;
