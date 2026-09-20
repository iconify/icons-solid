import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kw921fbsc {
  fill: currentColor;
  d: path("M7.654 20V9l6.269-6.192l.87.869L13.665 9H22v3.17L18.696 20zM3 20V9h3.654v11z");
}
</style><path class="kw921fbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:thumb-up-sharp"} {...others} />);
}

export default Component;
