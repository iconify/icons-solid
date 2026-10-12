import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b2ijmz4ie {
  d: path("M9.75 2.75h5.5l.89.45l2.22 1.1l.89.45l.36.93l1.28 3.39l.36.93l-.97.22l-1.31.31l-.97.22l-.02 1l-.21 8.5l-.02 1H14l-.27-.96l-1.46-5.33L12 14l-.27.96l-1.46 5.33l-.27.96H6.25l-.02-1l-.21-8.5l-.02-1l-.97-.22l-1.31-.31l-.97-.22l.36-.93l1.28-3.39l.36-.93l.89-.45l2.22-1.1l.89-.45z");
}

.isqo_9bcz {
  d: path("M9.75 3L12 6.25L14.25 3m-7.5 9.25h10.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="b2ijmz4ie"/><path class="isqo_9bcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:jumpsuit-sharp"} {...others} />);
}

export default Component;
