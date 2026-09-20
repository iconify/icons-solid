import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vohjuun2x.css';
import '../../css/z/z6b9e28xj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="vohjuun2x"/><path class="z6b9e28xj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:class-lesson"} {...others} />);
}

export default Component;
