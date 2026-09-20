import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_scgh01f {
  fill: currentColor;
  d: path("M8 21V7.994h13v8.583L16.577 21zm-2.988-3.194L2.752 5.01l12.794-2.259l.504 2.864H5.617v12.082zM14 18h1v-3h3v-1h-3v-3h-1v3h-3v1h3z");
}
</style><path class="j_scgh01f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:note-stack-add-sharp"} {...others} />);
}

export default Component;
