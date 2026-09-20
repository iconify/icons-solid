import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.p-raec0bp {
  fill: currentColor;
  d: path("m5 2.12l-.828 1.678l-2.486.362a.798.798 0 0 0-.444 1.364l1.8 1.754l-.425 2.475a.8.8 0 0 0-.005.254a.8.8 0 0 0 1.165.59L5 9.954z");
}
</style><path class="p-raec0bp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:star-one-quarter-12-filled"} {...others} />);
}

export default Component;
