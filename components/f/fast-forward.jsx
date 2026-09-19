import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t-qenbb4q {
  fill: currentColor;
  d: path("m4 18l8.5-6L4 6zm9-12v12l8.5-6z");
}
</style><path class="t-qenbb4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:fast-forward"} {...others} />);
}

export default Component;
