import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fna-pkzxl {
  fill: currentColor;
  d: path("M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z");
}
</style><path class="fna-pkzxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-storage"} {...others} />);
}

export default Component;
