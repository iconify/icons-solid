import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oz-gyro2d.css';
import '../../css/p/p38gk2f1t.css';
import '../../css/h/hdc-cdoqj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="oz-gyro2d"/><rect class="p38gk2f1t"/><path class="hdc-cdoqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-file-clipboard-text-edition-form-task-checklist-edit-clipboard"} {...others} />);
}

export default Component;
