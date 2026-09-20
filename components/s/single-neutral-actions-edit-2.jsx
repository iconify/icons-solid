import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vcwlsol0u.css';
import '../../css/k/k9-mltwej.css';
import '../../css/g/g9atgrb0m.css';
import '../../css/c/c7tzzgbem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vcwlsol0u"/><path class="k9-mltwej"/><path class="g9atgrb0m"/><path class="c7tzzgbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:single-neutral-actions-edit-2"} {...others} />);
}

export default Component;
