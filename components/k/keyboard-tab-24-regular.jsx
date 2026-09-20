import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.onjas7u7v {
  fill: currentColor;
  d: path("m18.03 11.47l-6.5-6.5a.75.75 0 0 0-1.133.976l.073.084l5.22 5.22H3.75a.75.75 0 0 0-.743.648L3 12c0 .38.282.694.648.743l.102.007h11.94l-5.22 5.22a.75.75 0 0 0-.073.976l.073.084a.75.75 0 0 0 .976.073l.084-.073l6.5-6.5a.75.75 0 0 0 .073-.976zl-6.5-6.5zM21 18.5v-13a.75.75 0 0 0-1.5 0v13a.75.75 0 0 0 1.5 0");
}
</style><path class="onjas7u7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:keyboard-tab-24-regular"} {...others} />);
}

export default Component;
