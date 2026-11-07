import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.urz16m7kr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 2l9 4.444v11.112L12 22l-9-4.444V6.444zM3 6.444l9 4.445l9-4.445m-9 4.445V22M7.5 4.222l9 4.445");
}
</style><path class="urz16m7kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:box-taped-sharp"} {...others} />);
}

export default Component;
