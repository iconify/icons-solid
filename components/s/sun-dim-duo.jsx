import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6wedk6gg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b4a62x58a.css';
import '../../css/h/h1zbsh5sl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary z6wedk6gg"/><g class="dt0cm9dhy primary"><path class="b4a62x58a"/><path class="h1zbsh5sl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sun-dim-duo"} {...others} />);
}

export default Component;
