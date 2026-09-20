import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k33gp4bvz {
  fill: currentColor;
  d: path("M14 21v-3.23h2V21zm-6 0v-4H1.885l3.965-6H3.923L9 3.73L14.077 11H12.15l3.971 6H10v4zm9.039-4l-3.462-5.23h1.983l-3.09-4.404L15 3.731L20.077 11H18.15l3.966 6z");
}
</style><path class="k33gp4bvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:forest"} {...others} />);
}

export default Component;
