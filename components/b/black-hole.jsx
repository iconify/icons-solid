import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8jnzqbdy.css';
import '../../css/h/hyih-4b5l.css';
import '../../css/l/ledvo0j9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="m8jnzqbdy"/><path clip-rule="evenodd" class="hyih-4b5l"/><path clip-rule="evenodd" class="ledvo0j9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:black-hole"} {...others} />);
}

export default Component;
