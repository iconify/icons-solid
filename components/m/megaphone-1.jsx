import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fj6yl0zvc.css';
import '../../css/i/ihep_obbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="fj6yl0zvc"/><path class="ihep_obbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:megaphone-1"} {...others} />);
}

export default Component;
