import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zzox6rq7q {
  fill: currentColor;
  d: path("M5 8v8h2a1 1 0 0 1 0 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2a1 1 0 0 1 0 2Zm14-2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2a1 1 0 0 1 0-2h2V8h-2a1 1 0 0 1 0-2Z");
}
</style><path class="zzox6rq7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:brackets-fill"} {...others} />);
}

export default Component;
