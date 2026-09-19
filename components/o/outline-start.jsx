import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.epegidc8d {
  fill: currentColor;
  d: path("M14.59 7.41L18.17 11H6v2h12.17l-3.59 3.59L16 18l6-6l-6-6zM2 6v12h2V6z");
}
</style><path class="epegidc8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-start"} {...others} />);
}

export default Component;
