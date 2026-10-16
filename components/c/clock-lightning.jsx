import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7zs-8p3m.css';
import '../../css/c/ch45weh1g.css';
import '../../css/v/vuuh2kbfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a7zs-8p3m"/><path class="ch45weh1g"/><path class="vuuh2kbfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clock-lightning"} {...others} />);
}

export default Component;
