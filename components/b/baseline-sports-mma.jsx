import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aphk11biw {
  fill: currentColor;
  d: path("M7 20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-3H7zM18 7c-.55 0-1 .45-1 1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v5.8c0 .13.01.26.04.39l.8 4c.09.47.5.8.98.8h10.36c.45 0 .89-.36.98-.8l.8-4c.03-.13.04-.26.04-.39V8c0-.55-.45-1-1-1m-3 3H7V7h8z");
}
</style><path class="aphk11biw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-sports-mma"} {...others} />);
}

export default Component;
