import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1rzkm0gx.css';
import '../../css/r/rwic42bjm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/umggkyb4f.css';
import '../../css/y/y9utjgprl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e1rzkm0gx"/><path class="rwic42bjm"/><g class="jn8qy4bru"><path class="umggkyb4f"/><path class="y9utjgprl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mount-fuji"} {...others} />);
}

export default Component;
