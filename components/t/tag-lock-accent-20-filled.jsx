import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.h3o1nlbko {
  fill: currentColor;
  d: path("M17.507 4.034a1.5 1.5 0 0 0-1.49-1.498l-4.891-.032a1.5 1.5 0 0 0-1.07.438l-6.68 6.664a1.5 1.5 0 0 0-.002 2.123l4.948 4.948a1.5 1.5 0 0 0 1.678.308V14a2 2 0 0 1 1.5-1.937V12a3 3 0 0 1 5.41-1.788l.164-.165a1.5 1.5 0 0 0 .44-1.063z");
}
</style><path class="h3o1nlbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:tag-lock-accent-20-filled"} {...others} />);
}

export default Component;
