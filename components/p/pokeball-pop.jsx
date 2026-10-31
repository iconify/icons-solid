import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/n/nmzg-hb6z.css';
import '../../css/h/hoglh3kgp.css';
import '../../css/m/mfmeo5b6o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="nmzg-hb6z"/><path class="hoglh3kgp"/><path class="mfmeo5b6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pokeball-pop"} {...others} />);
}

export default Component;
