import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o743r2b5i {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V7H5zm2-7.5v-1h10v1zm0 4v-1h6v1z");
}
</style><path class="o743r2b5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:wysiwyg-sharp"} {...others} />);
}

export default Component;
