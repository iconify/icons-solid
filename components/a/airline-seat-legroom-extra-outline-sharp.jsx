import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h0bvkcbfe {
  fill: currentColor;
  d: path("M12.77 16.5h-10v-13h1v12h9zm5.36 3.577L15.386 14.5H5.654v-11h5v7h4.821l3.571 7.292l2.527-1.067l.752 1.433z");
}
</style><path class="h0bvkcbfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:airline-seat-legroom-extra-outline-sharp"} {...others} />);
}

export default Component;
