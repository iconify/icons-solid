import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7v_7vb-u.css';
import '../../css/l/ls6nhvbak.css';
import '../../css/o/o54k0kb2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f7v_7vb-u"/><path class="ls6nhvbak"/><path clip-rule="evenodd" class="o54k0kb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:theater-mask-flat"} {...others} />);
}

export default Component;
