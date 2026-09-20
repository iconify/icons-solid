import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.w_pl5z8xc {
  fill: var(--svg-color--e0e0e0, #e0e0e0);
  d: path("M108.17 100.02c0 4.73-3.87 8.6-8.6 8.6H27.6c-4.73 0-8.6-3.87-8.6-8.6V28.05c0-4.73 3.87-8.6 8.6-8.6h71.97c4.73 0 8.6 3.87 8.6 8.6z");
}

.xlhh65b2u {
  fill: var(--svg-color--424242, #424242);
  d: path("M127.56 113.88c0 7.53-6.16 13.69-13.69 13.69H14.12c-7.53 0-13.69-6.16-13.69-13.69V14.12C.43 6.59 6.59.43 14.12.43h99.75c7.53 0 13.69 6.16 13.69 13.69z");
}
</style><path class="xlhh65b2u"/><path class="w_pl5z8xc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:black-square-button"} {...others} />);
}

export default Component;
