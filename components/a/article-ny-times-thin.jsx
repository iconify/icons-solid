import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.f4aoqrhno {
  fill: currentColor;
  d: path("M128 100h104a4 4 0 0 1 0 8H128a4 4 0 0 1 0-8m104 32H128a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8M96 140a4 4 0 0 0 0-8H84V60h40v12a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v16a4 4 0 0 0 8 0V60h40v72H64a4 4 0 0 0 0 8Z");
}
</style><path class="f4aoqrhno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:article-ny-times-thin"} {...others} />);
}

export default Component;
