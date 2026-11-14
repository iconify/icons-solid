import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mv8z50bzr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12t-3.002 7.248T12 22.25t-7.248-3.002T1.75 12m9.844 4.131q.091.058.195.089q.103.03.211.03t.211-.03t.195-.089Q16.25 13.659 16.25 11q0-2.75-2.5-2.75q-1.072 0-1.75.554q-.678-.554-1.75-.554q-2.5 0-2.5 2.75q0 2.659 3.844 5.131");
}
</style><path class="mv8z50bzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:heart-healthy-diet"} {...others} />);
}

export default Component;
