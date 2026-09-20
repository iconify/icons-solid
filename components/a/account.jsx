import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fk5bzrb7k.css';
import '../../css/e/e6_vovbrk.css';
import '../../css/e/e9qzyqbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fk5bzrb7k"/><path class="e6_vovbrk"/><path class="e9qzyqbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:account"} {...others} />);
}

export default Component;
