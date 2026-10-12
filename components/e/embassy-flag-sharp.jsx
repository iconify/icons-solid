import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oyan0_ois {
  d: path("M6.75 15.25v2.5m10.5-2.5v2.5M10.75 21v-4h2.5v4");
}

.r_2ck-b4m {
  d: path("M12 12.25v-9.5m0 .5h6.75L17.5 5.5l1.25 2.25H12Zm-8.75 9h17.5v9H3.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="r_2ck-b4m"/><path class="oyan0_ois"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:embassy-flag-sharp"} {...others} />);
}

export default Component;
