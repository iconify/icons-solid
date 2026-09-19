import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gyj9v_mhe {
  fill: currentColor;
  d: path("M18 20.998H6v-2h12z");
}

.q01z8wb7w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.5 15.5L9.25 10l8.25-5.5l-1-1.5L6 10l10.5 7z");
}
</style><path class="q01z8wb7w"/><path class="gyj9v_mhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-less-than-equal"} {...others} />);
}

export default Component;
