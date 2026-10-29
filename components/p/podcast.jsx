import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j29l7zx-t.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wlelc-beo.css';
import '../../css/s/s4igaupqa.css';
import '../../css/b/bg9kriicn.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f2gqnj-rk.css';
import '../../css/a/ah9tulb8y.css';
import '../../css/l/l2mtfnb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGUVVxGBMy" class="j29l7zx-t"/></defs><g class="t_2lkqbxb"><path class="wlelc-beo wm-shadow"/><path class="s4igaupqa"/><path class="bg9kriicn"/><use href="#SVGUVVxGBMy" class="d2kvgvbvc"/><path class="f2gqnj-rk"/><use href="#SVGUVVxGBMy" class="d2kvgvbvc"/><path class="ah9tulb8y"/><path class="l2mtfnb0i wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:podcast"} {...others} />);
}

export default Component;
