import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4zs08s-q.css';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b2c0qprhd.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGOFGrfdbi" class="g4zs08s-q"/></defs><g class="jx0p4fbya"><use href="#SVGOFGrfdbi"/><use href="#SVGOFGrfdbi"/><path class="b2c0qprhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pokeball"} {...others} />);
}

export default Component;
