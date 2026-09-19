import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.me47m4bso {
  fill: currentColor;
  d: path("M19 1.01L5.01 1v22H19zM17 19H7V5h10z");
}
</style><path class="me47m4bso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-stay-current-portrait"} {...others} />);
}

export default Component;
