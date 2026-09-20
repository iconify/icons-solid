import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hjys1obeo.css';
import '../../css/q/q9fv-nbai.css';
import '../../css/y/ygkt1vnmu.css';
import '../../css/a/ak90qhbbj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="hjys1obeo"/><path class="q9fv-nbai"/><path class="ygkt1vnmu"/><path class="ak90qhbbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pen-1"} {...others} />);
}

export default Component;
