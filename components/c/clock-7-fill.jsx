import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.je37nc8jb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C18.0751 1 23 5.9249 23 12C23 18.0751 18.0751 23 12 23C5.9249 23 1 18.0751 1 12C1 5.9249 5.9249 1 12 1ZM13 6C13 5.4477 12.5523 5 12 5C11.4477 5 11 5.4477 11 6L11 11.732L8.634 15.8301C8.3578 16.3084 8.5217 16.92 9 17.1961C9.2297 17.3287 9.5026 17.3647 9.7588 17.296C10.015 17.2274 10.2334 17.0598 10.366 16.8301L12.866 12.5C12.9538 12.348 13 12.1755 13 12L13 6Z");
}
</style><path clip-rule="evenodd" class="je37nc8jb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clock-7-fill"} {...others} />);
}

export default Component;
