import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kb-y9pbvh {
  fill: currentColor;
  d: path("M9 3v3h6V3a1 1 0 0 1 2 0v18a1 1 0 0 1-2 0v-3H9v3a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0m0 8h6V8H9Zm0 2v3h6v-3Z");
}
</style><path class="kb-y9pbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ladder-fill-sharp"} {...others} />);
}

export default Component;
