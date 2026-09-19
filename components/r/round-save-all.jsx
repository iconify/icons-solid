import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ianha5b-p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17 6H8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11c1.1 0 2-.9 2-2v-9zM8 9.5A1.5 1.5 0 0 1 9.5 8h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 8 9.5m5.5 9.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5");
}

.kvvre9b5e {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h9a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v8a1 1 0 1 1-2 0z");
}
</style><path clip-rule="evenodd" class="ianha5b-p"/><path class="kvvre9b5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-save-all"} {...others} />);
}

export default Component;
