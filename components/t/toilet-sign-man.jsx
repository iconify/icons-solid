import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/ya55irbaa.css';
import '../../css/p/pg21wkb4v.css';
import '../../css/a/ayd_-v01l.css';
import '../../css/f/fqda2ubnv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ya55irbaa"/><path class="pg21wkb4v"/><path class="ayd_-v01l"/><path class="fqda2ubnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:toilet-sign-man"} {...others} />);
}

export default Component;
