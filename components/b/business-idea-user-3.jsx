import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/t/tf235abnd.css';
import '../../css/s/s656nxber.css';
import '../../css/f/f1l4zvtvq.css';
import '../../css/h/h_itdlq6j.css';
import '../../css/o/ouvl684ba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="tf235abnd"/><path class="s656nxber"/><path class="f1l4zvtvq"/><path class="h_itdlq6j"/><path class="ouvl684ba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-idea-user-3"} {...others} />);
}

export default Component;
