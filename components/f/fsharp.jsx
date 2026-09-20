import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":243};
const content = `<style>.j45wgnboo {
  fill: var(--svg-color--30b9db, #30b9db);
  d: path("M256 121.492L130.17 0v60.746l60.745 60.746l-60.746 60.745v60.746z");
}

.r9liddcwh {
  fill: var(--svg-color--378bba, #378bba);
  d: path("m78.102 121.492l43.39-43.39v86.78z");
}

.v-lrgd2hc {
  fill: var(--svg-color--378bba, #378bba);
  d: path("M0 121.492L121.492 0v60.746l-60.746 60.746l60.746 60.745v60.746z");
}
</style><path class="v-lrgd2hc"/><path class="r9liddcwh"/><path class="j45wgnboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:fsharp"} {...others} />);
}

export default Component;
