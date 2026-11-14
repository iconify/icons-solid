import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s9o4jp5_a {
  d: path("m4.586 11.61l13.107-9.177l1.721 2.457l-13.107 9.177ZM12 8.25V21.5");
}

.u1f7p0hhg {
  d: path("m6.307 2.433l13.107 9.177l-1.721 2.457L4.586 4.89Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u1f7p0hhg"/><path class="s9o4jp5_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crossbuck-sign"} {...others} />);
}

export default Component;
