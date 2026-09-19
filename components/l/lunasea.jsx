import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m_5mdmbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.803 13.303a10.3 10.3 0 0 1 2.937.418a9 9 0 0 0-.861-.044a8.6 8.6 0 0 0-2.526.379a30 30 0 0 0-2.9 1.546a8.62 8.62 0 1 0 14.004 7.548c.022.281.043.564.043.85a10.698 10.698 0 1 1-20.731-3.683a45 45 0 0 0-5.021 4.694c-4.38 4.887-9.267 9.52-15.248 9.52c7.338-1.128 12.071-21.229 30.303-21.229Z");
}
</style><path class="m_5mdmbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lunasea"} {...others} />);
}

export default Component;
