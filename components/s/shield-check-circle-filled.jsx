import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/h/hzn7zxb3d.css';
import '../../css/v/v0u4sbfbw.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGAQqOYdKC"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="hzn7zxb3d"/><path class="v0u4sbfbw"/></g></mask></defs><circle mask="url(#SVGAQqOYdKC)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:shield-check-circle-filled"} {...others} />);
}

export default Component;
