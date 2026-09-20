import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v8ghvfuls {
  fill: currentColor;
  d: path("M19.923 15.385V9.562L12 13.846L3.077 9L12 4.154L20.923 9v6.385zM12 18.692l-6-3.261v-4.077l6 3.262l6-3.262v4.077z");
}
</style><path class="v8ghvfuls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:school-sharp"} {...others} />);
}

export default Component;
