import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ktpr-cc0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.52 14.117s-.808-1.642-1.995-1.916h8.037l6.473 14.838L16.8 35.8zm27.834 19.574v-9.335c0-2.683-3.398-1.643-3.398-1.643a8.74 8.74 0 0 1 5.772-2.19c3.56 0 3.775 3.37 3.775 3.37s.055 8.511 0 9.606s1.997 1.096 1.997 1.096c-1.645.985-3.64.985-5.043.985c-3.183 0-3.103-1.889-3.103-1.889m-27.186 1.67H4.5c3.345-1.916 3.668-9.856 3.668-9.856s.324 7.94 3.668 9.856zm14.564 0c1.457-.547 1.403-1.751 1.403-1.751V12.2h7.821c-1.888.822-1.618 1.862-1.618 1.862v19.765c0 .93 1.403 1.533 1.403 1.533z");
}
</style><path class="ktpr-cc0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mauritshuis"} {...others} />);
}

export default Component;
