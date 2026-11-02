import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j3dt8sb6x {
  fill: currentColor;
  d: path("M17.708 6.706L13 11.414V20h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3v-8.586L4.293 4.707a1.36 1.36 0 0 1-.382-1.186C4.072 2.572 5.102 2 6 2h12c.898 0 1.928.572 2.089 1.521a1.34 1.34 0 0 1-.382 1.186ZM17.586 4H6.414l1 1h9.172Z");
}
</style><path class="j3dt8sb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:martini-fill"} {...others} />);
}

export default Component;
