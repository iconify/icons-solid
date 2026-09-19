import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c9ti-0ven {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.45 15.696c24.618 2.143-49.79 25.789-30.816 9.647m14.677 9.971c-1.59.426-1.793 1.814.53 4.137c-4.582-.43-7.866-4.507-9.506-7.348");
}

.s5hanmbcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.663 30.292a13.693 13.693 0 1 1 24.772-8.05m-.298 2.3a13.694 13.694 0 0 1-14.825 10.771");
}
</style><path class="s5hanmbcg"/><path class="c9ti-0ven"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:chatous"} {...others} />);
}

export default Component;
