import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e539d4bfq {
  d: path("M7.25 15.5h10l-.22.45l-1.06 2.1l-.22.45h-7.5l-.22-.45l-1.06-2.1l-.22-.45zm2-3h5.5v3h-5.5z");
}

.hztu1kbjx {
  d: path("M4.25 2.75h15.5v18.5H4.25zm3.25 3.5h9m-9 3h6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hztu1kbjx"/><path class="e539d4bfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bill-of-lading-sharp"} {...others} />);
}

export default Component;
