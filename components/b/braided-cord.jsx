import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ciiu89bvh {
  d: path("M7.75 3C7.25 5 9.5 6.5 12 7c6.5.75 6.5 5.25 0 6s-6.5 5.25 0 6c2.5.5 4.25 1 4.25 2");
}

.fk-snpvfc {
  d: path("M16.25 3c-.75 1.25-2.5 1.75-4.25 2c-6.5.75-6.5 5.25 0 6s6.5 5.25 0 6c-3.5.5-4.25 2-4.25 4");
}

.p8bj2jw6u {
  d: path("M12 3c6.5.75 6.5 5.25 0 6s-6.5 5.25 0 6s6.5 5.25 0 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p8bj2jw6u"/><path class="ciiu89bvh"/><path class="fk-snpvfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:braided-cord"} {...others} />);
}

export default Component;
