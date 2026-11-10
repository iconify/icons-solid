import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.u89gmdbts {
  fill-rule: evenodd;
  d: path("M7 5C9.209 5 11 6.79 11 9V17H3V9C3 6.79 4.791 5 7 5ZM5 8V10H9V8H5Z");
}

.y4sosteim {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 18C23 18.55 22.552 19 22 19H13V21H11V19H2C1.448 19 1 18.55 1 18V9C1 5.69 3.686 3 7 3H17C20.312 3 23 5.69 23 9V18Z");
}
</style><g class="cuyn6tgcc"><path class="y4sosteim"/><path clip-rule="evenodd" class="u89gmdbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mailbox-sharp-duotone"} {...others} />);
}

export default Component;
