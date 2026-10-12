import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mu53uccft {
  d: path("m9.48 10.28l5.31-5.31l4.24 4.24l-5.31 5.31Zm4.24-6.37l6.37 6.37");
}

.v9i8vqbvt {
  d: path("m9.48 10.28l-4.24 4.24a3 3 0 0 0 4.24 4.24l4.24-4.24Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="v9i8vqbvt"/><path class="mu53uccft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:test-tube-x-sharp"} {...others} />);
}

export default Component;
