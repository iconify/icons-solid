import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vfslvt2iu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.25 18.53v10.937l9.473-5.469z");
}

.yyh8iwbly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.945 16.045v15.91L8.5 33.942l.001 7.955L39.5 23.999L8.5 6.104v7.953z");
}
</style><path class="yyh8iwbly"/><path class="vfslvt2iu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:allmovieland-v2"} {...others} />);
}

export default Component;
