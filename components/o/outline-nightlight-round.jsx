import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s2ugpmvqv {
  fill: currentColor;
  d: path("M15.5 22c1.05 0 2.05-.16 3-.46c-4.06-1.27-7-5.06-7-9.54s2.94-8.27 7-9.54c-.95-.3-1.95-.46-3-.46c-5.52 0-10 4.48-10 10s4.48 10 10 10");
}
</style><path class="s2ugpmvqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-nightlight-round"} {...others} />);
}

export default Component;
