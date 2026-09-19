import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.j38rvrbxg {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M14 26h50v13H14z");
}

.k8pu8bbdr {
  fill: var(--svg-color--25333a, #25333a);
  d: path("M14 54h40c6.627 0 10-4.925 10-11v-4H14z");
}

.mbzw1rb8h {
  fill: var(--svg-color--ec1c24, #ec1c24);
  d: path("M14 39V10h-4C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h4z");
}

.pg5h2jkzu {
  fill: var(--svg-color--137a08, #137a08);
  d: path("M54 10H14v16h50v-5c0-6.075-3.373-11-10-11");
}
</style><path class="j38rvrbxg"/><path class="k8pu8bbdr"/><path class="pg5h2jkzu"/><path class="mbzw1rb8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:flag-for-united-arab-emirates"} {...others} />);
}

export default Component;
