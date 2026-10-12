import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j1-unv-pk {
  cx: 12px;
  cy: 19.5px;
  r: 1.75px;
}

.t88z8mbby {
  cx: 12px;
  cy: 4.5px;
  r: 1.75px;
}

.v-a7lkjxy {
  d: path("M12 6.25V9M8.5 9h7v6.5h-7zm0 3.25h7M12 15.5v2.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="t88z8mbby"/><path class="v-a7lkjxy"/><circle class="j1-unv-pk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:shock-absorber-sharp"} {...others} />);
}

export default Component;
