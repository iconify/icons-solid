import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ihsk4nbzg {
  fill: currentColor;
  d: path("M244 156h-48v-56h48a12 12 0 0 0 0-24h-52a20 20 0 0 0-16-8h-64a20 20 0 0 0-16 8H67.3a12 12 0 0 0-22.6 0H12a12 12 0 0 0 0 24h32v56H12a12 12 0 0 0 0 24h32.7a12 12 0 0 0 22.6 0H96a20 20 0 0 0 16 8h64a20 20 0 0 0 16-8h52a12 12 0 0 0 0-24M68 100h24v56H68Zm48-8h56v24h-28a12 12 0 0 0 0 24h28v24h-56Z");
}
</style><path class="ihsk4nbzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:belt-bold"} {...others} />);
}

export default Component;
