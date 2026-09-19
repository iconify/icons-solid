import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a3yr54bqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.387 11.974v15.873c7.622 1.255 14.384 2.87 19.378 5.227V18.221a47.9 47.9 0 0 0-19.378-6.247");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.d2lg5cpgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.113 15.926v15.618a99.4 99.4 0 0 0-19.57 5.482V22.173c5.708-3.83 12.444-5.492 19.57-6.247");
}
</style><circle class="cpk0fnbgt"/><path class="a3yr54bqu"/><path class="d2lg5cpgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:china-university-mooc"} {...others} />);
}

export default Component;
