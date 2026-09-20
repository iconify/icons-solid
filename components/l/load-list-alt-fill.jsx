import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yd480jeeu.css';
import '../../css/t/tzow_ibpm.css';
import '../../css/t/thb97fs7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yd480jeeu"/><path clip-rule="evenodd" class="tzow_ibpm"/><path class="thb97fs7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:load-list-alt-fill"} {...others} />);
}

export default Component;
