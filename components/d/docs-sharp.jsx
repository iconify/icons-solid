import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ngma_9qff {
  fill: currentColor;
  d: path("M12 2v7h7v13H5V2zm2 0l5 5h-5zM9 19h4v-2H9zm0-4h6v-2H9z");
}
</style><path class="ngma_9qff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:docs-sharp"} {...others} />);
}

export default Component;
