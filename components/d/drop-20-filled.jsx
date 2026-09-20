import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.n_7hmnb7a {
  fill: currentColor;
  d: path("M9.646 2.146a.5.5 0 0 1 .708 0c.531.532 1.804 2.064 2.946 3.903c1.13 1.82 2.2 4.05 2.2 5.951c0 1.844-.528 3.352-1.51 4.404C13.007 17.459 11.616 18 10 18s-3.006-.541-3.99-1.596C5.027 15.352 4.5 13.844 4.5 12c0-1.902 1.07-4.13 2.2-5.951c1.142-1.84 2.415-3.37 2.946-3.903");
}
</style><path class="n_7hmnb7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:drop-20-filled"} {...others} />);
}

export default Component;
