import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m392eubms {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 4.75q-7.099 0-10.185 6.945q-.065.146-.065.305t.065.305Q4.901 19.25 12 19.25t10.185-6.945q.065-.146.065-.305t-.065-.305Q19.099 4.75 12 4.75M8.25 12q0-3.75 3.75-3.75T15.75 12T12 15.75T8.25 12");
}
</style><path class="m392eubms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:show"} {...others} />);
}

export default Component;
