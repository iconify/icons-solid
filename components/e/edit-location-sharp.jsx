import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o1hqqrcxv {
  fill: currentColor;
  d: path("M8.885 13.116h.719l3.9-3.906l-.713-.714l-3.906 3.9zm5.344-4.631l.783-.783l-.714-.713l-.782.782zM12 21.019q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814");
}
</style><path class="o1hqqrcxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:edit-location-sharp"} {...others} />);
}

export default Component;
