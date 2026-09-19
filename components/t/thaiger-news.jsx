import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.o4ikvyb9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.564 42.483l-5.56-20.87l-8.642 2.264l-3.143-10.408L37.639 5.5l3.142 10.407l-8.972 2.363l5.556 20.883c-3.714 2.626-8.074 3.484-12.801 3.33");
}
</style><path class="o4ikvyb9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:thaiger-news"} {...others} />);
}

export default Component;
