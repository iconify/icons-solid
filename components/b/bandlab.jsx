import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a3ihcnboj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.612 6.033H19.358l7.344 18.152c1.092 2.36 1.69 3.774.323 5.542c-.107.192-2.66 3.947-6.096 3.095a3.43 3.43 0 0 1-2.633-3.603a4.9 4.9 0 0 1 2.97-4.295a8.62 8.62 0 0 1 5.436-.74");
}

.h7dktxbit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.308 14.485l-5.034 9.33c-4.156 7.676-5.138 17.517 7.852 18.152H30.12c9.989-.414 16.42-5.939 9.469-18.152l-5.682-9.33");
}
</style><path class="h7dktxbit"/><path class="a3ihcnboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bandlab"} {...others} />);
}

export default Component;
