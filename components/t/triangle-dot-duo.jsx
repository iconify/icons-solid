import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ouhh3jbqt.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qzwcluezf.css';
import '../../css/t/tw4-rib7g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ouhh3jbqt secondary"/><g class="dt0cm9dhy primary"><path class="qzwcluezf"/><path class="tw4-rib7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:triangle-dot-duo"} {...others} />);
}

export default Component;
