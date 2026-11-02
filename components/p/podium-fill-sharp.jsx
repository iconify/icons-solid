import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c2vndjesm {
  fill: currentColor;
  d: path("M7 11V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v9h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Zm3.293-.707a.999.999 0 1 0 1.414 1.414l.293-.293V15a1 1 0 0 0 2 0V9a1.002 1.002 0 0 0-1.707-.707ZM7 13H4v7h3Zm10 7h3v-4h-3Z");
}
</style><path class="c2vndjesm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:podium-fill-sharp"} {...others} />);
}

export default Component;
