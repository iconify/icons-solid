import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fj3g-0jbg {
  fill: currentColor;
  d: path("M19 5H5v14h14zm-5 12h-2V9h-2V7h4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.lllwdbmkk {
  fill: currentColor;
  d: path("M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5zm5 4h2v8h2V7h-4z");
}
</style><path class="fj3g-0jbg"/><path class="lllwdbmkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-looks-one"} {...others} />);
}

export default Component;
