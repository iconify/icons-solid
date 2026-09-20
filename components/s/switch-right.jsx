import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xt6xfzbhn {
  fill: currentColor;
  d: path("M10 17.48L4.52 12L10 6.52zm4 0V6.52L19.48 12zm.885-2.124L18.24 12l-3.356-3.356z");
}
</style><path class="xt6xfzbhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:switch-right"} {...others} />);
}

export default Component;
