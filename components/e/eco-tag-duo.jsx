import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ykbbngpem.css';
import '../../css/b/bk-vo5bmr.css';
import '../../css/q/qtw007hfb.css';
import '../../css/b/bcjnld3fc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ykbbngpem"/><path class="bk-vo5bmr"/><path class="qtw007hfb"/><path class="bcjnld3fc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:eco-tag-duo"} {...others} />);
}

export default Component;
