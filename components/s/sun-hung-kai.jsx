import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm0il7buz.css';
import '../../css/t/t6p_dr0gd.css';
import '../../css/k/kszee7qek.css';
import '../../css/s/s34kvmbie.css';
import '../../css/e/emyng5bpe.css';

const viewBox = {"width":1549,"height":1543};
const content = `<defs><clipPath id="SVGLqb8WQBV" clipPathUnits="userSpaceOnUse"><use href="#SVGCfBwQeLe"/></clipPath><path id="SVGCfBwQeLe" class="wm0il7buz"/></defs><g clip-path="url(#SVGLqb8WQBV)"><path class="t6p_dr0gd"/></g><g clip-path="url(#SVGLqb8WQBV)"><path class="kszee7qek"/></g><g clip-path="url(#SVGLqb8WQBV)"><path class="s34kvmbie"/></g><g clip-path="url(#SVGLqb8WQBV)"><path class="emyng5bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sun-hung-kai"} {...others} />);
}

export default Component;
