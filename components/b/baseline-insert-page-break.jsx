import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.featfqbuw {
  fill: currentColor;
  d: path("M4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2v-3H4zM20 8l-6-6H6c-1.1 0-1.99.9-1.99 2v7H20zm-7 1V3.5L18.5 9zm-4 4h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z");
}
</style><path class="featfqbuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-insert-page-break"} {...others} />);
}

export default Component;
