import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.tt7l_ub-h {
  fill: currentColor;
  d: path("M17.853 2.854a.5.5 0 0 0-.707-.708L14 5.292V2.5a.5.5 0 1 0-1 0v2.876c-1.579-.784-3.588-.338-4.64 1.207l-6.086 8.946c-.428.63-.346 1.47.196 2.007c.55.544 1.415.619 2.053.178l8.93-6.184A3.57 3.57 0 0 0 14.629 7h2.87a.5.5 0 1 0 0-1h-2.793z");
}
</style><path class="tt7l_ub-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:food-carrot-20-filled"} {...others} />);
}

export default Component;
