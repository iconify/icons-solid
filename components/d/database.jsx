import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp6bi8wch.css';
import '../../css/z/zt78mr5_d.css';
import '../../css/u/ud65yub8l.css';
import '../../css/k/ktn4yab2i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hp6bi8wch"/><path class="zt78mr5_d"/><path class="ud65yub8l"/><path class="ktn4yab2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:database"} {...others} />);
}

export default Component;
