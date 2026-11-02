import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nogaml5-l {
  fill: currentColor;
  d: path("M4 20V5a3 3 0 1 1 6 0v5.234l3.486-2.091A.997.997 0 0 1 15 9v1.234l3.486-2.091A.997.997 0 0 1 20 9v11h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm4.01-5H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m4 0H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M16 15a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="nogaml5-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:factory-fill"} {...others} />);
}

export default Component;
